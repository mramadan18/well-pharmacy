import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const searchProducts = createAsyncThunk(
  "searchSlice/searchProducts",
  async (name) => {
    const { data } = await baseUrl.get(`/product/?find=${name}`, {
      headers: { "Accept-Language": localStorage.getItem("lang") },
    });
    return data;
  }
);

const searchSlice = createSlice({
  name: " ",
  initialState: {
    loading: false,
    products: [],
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.results;
    });
    builder.addCase(searchProducts.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default searchSlice.reducer;
