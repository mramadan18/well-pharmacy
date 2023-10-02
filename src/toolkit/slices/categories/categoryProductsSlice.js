import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getCategoryProducts = createAsyncThunk(
  "categoryProductsSlice/fetchProducts",
  async (id) => {
    const { data } = await baseUrl.get(`/product/?category=${id}`);
    return data;
  }
);

const categoryProductsSlice = createSlice({
  name: "categoryProductsSlice",
  initialState: {
    loading: false,
    products: [],
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoryProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCategoryProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.results;
    });
    builder.addCase(getCategoryProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default categoryProductsSlice.reducer;
