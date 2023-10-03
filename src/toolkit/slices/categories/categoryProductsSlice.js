import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getCategoryProducts = createAsyncThunk(
  "categoryProductsSlice/fetchProducts",
  async (params) => {
    const { data } = await baseUrl.get(
      `/product/?category=${params.categoryId}&offset=${
        (params.activePage + 1 - 1) * 12
      }`
    );
    return data;
  }
);

const categoryProductsSlice = createSlice({
  name: "categoryProductsSlice",
  initialState: {
    loading: false,
    products: [],
    pagesCount: 0,
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
      state.pagesCount = Math.ceil(action.payload.count / 12);
    });
    builder.addCase(getCategoryProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default categoryProductsSlice.reducer;
