import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getCartItems = createAsyncThunk(
  "cartSlice/fetchCart",
  async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await baseUrl.get("/cart/cart_items", config);
    return data;
  }
);

const cartItemsSlice = createSlice({
  name: "cartItemsSlice",
  initialState: {
    loading: false,
    cart_items: [],
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.loading = false;
      state.cart_items = action.payload;
    });
    builder.addCase(getCartItems.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default cartItemsSlice.reducer;
