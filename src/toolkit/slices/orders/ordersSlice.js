import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getOrders = createAsyncThunk(
  "ordersSlice/fetchOrders",
  async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await baseUrl.get("/order/history", config);
    return data;
  }
);

const ordersSlice = createSlice({
  name: "ordersSlice",
  initialState: {
    loading: false,
    orders: [],
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrders.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    });
    builder.addCase(getOrders.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

export default ordersSlice.reducer;
