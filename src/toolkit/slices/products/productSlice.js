import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getProduct = createAsyncThunk(
  "productSlice/fetchProduct",
  async (params) => {
    const { data } = await baseUrl.get(`/product/${params}`, {
      headers: { "Accept-Language": localStorage.getItem("lang") },
    });
    return data;
  }
);

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    loading: false,
    product: [],
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default productSlice.reducer;
