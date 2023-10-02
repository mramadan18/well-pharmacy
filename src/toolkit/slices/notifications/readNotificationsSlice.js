import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const readNotifications = createAsyncThunk(
  "readNotificationsSlice/postNotifications",
  async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await baseUrl.post("/notification/", {}, config);
    return data;
  }
);

const readNotificationsSlice = createSlice({
  name: "readNotificationsSlice",
  initialState: {
    loading: false,
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(readNotifications.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(readNotifications.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(readNotifications.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default readNotificationsSlice.reducer;
