import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const { data } = await baseUrl.get("/product");
    return data;
  }
);

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    loading: false,
    products: [],
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
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default productsSlice.reducer;
