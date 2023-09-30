import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getNotifications = createAsyncThunk(
  "notificationsSlice/fetchNotifications",
  async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await baseUrl.get("/notification/", config);
    return data;
  }
);

const notificationsSlice = createSlice({
  name: "notificationsSlice",
  initialState: {
    loading: false,
    notifications: [],
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNotifications.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getNotifications.fulfilled, (state, action) => {
      state.loading = false;
      state.notifications = action.payload;
    });
    builder.addCase(getNotifications.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default notificationsSlice.reducer;
