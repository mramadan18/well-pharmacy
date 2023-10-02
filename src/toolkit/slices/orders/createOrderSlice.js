import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const createOrder = createAsyncThunk(
  "createOrderSlice/postOrder",
  async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await baseUrl.post("/order/", {}, config);
    return data;
  }
);

const createOrderSlice = createSlice({
  name: "createOrderSlice",
  initialState: {
    loading: false,
    order: {},
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createOrder.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.order = action.payload;
    });
    builder.addCase(createOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default createOrderSlice.reducer;
