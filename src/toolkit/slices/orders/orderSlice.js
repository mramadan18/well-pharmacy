import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getOrder = createAsyncThunk(
  "orderSlice/fetchOrder",
  async (id) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Accept-Language": localStorage.getItem("lang"),
      },
    };

    const { data } = await baseUrl.get(`/order/history/${id}`, config);
    return data;
  }
);

const orderSlice = createSlice({
  name: "orderSlice",
  initialState: {
    loading: false,
    order: [],
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrder.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.order = action.payload;
    });
    builder.addCase(getOrder.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

export default orderSlice.reducer;
