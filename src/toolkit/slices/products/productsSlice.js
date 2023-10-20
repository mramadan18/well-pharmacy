import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async (page) => {
    const { data } = await baseUrl.get(
      `/product/?limit=12&offset=${(page + 1 - 1) * 12}`,
      {
        headers: { "Accept-Language": localStorage.getItem("lang") },
      }
    );
    return data;
  }
);

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    loading: true,
    products: [],
    pagesCount: 0,
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.results;
      state.pagesCount = Math.ceil(action.payload.count / 12);
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default productsSlice.reducer;
