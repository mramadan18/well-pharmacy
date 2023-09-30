import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const addToCart = createAsyncThunk(
  "addToCartSlice/postCart",
  async (params) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,

        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await baseUrl.post("/cart/cart_items/", params, config);
    return data;
  }
);

const addToCartSlice = createSlice({
  name: "addToCartSlice",
  initialState: {
    loading: false,
    product: {},
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default addToCartSlice.reducer;
