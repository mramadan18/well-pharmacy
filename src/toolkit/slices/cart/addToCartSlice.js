import baseUrl from "@/baseURL";
import toast from "react-hot-toast";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const addToCart = createAsyncThunk(
  "addToCartSlice/postCart",
  async (params) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
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
      toast.loading("Loading...");
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
      toast.remove();
      toast.success("The product has been added to the cart");
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.remove();
      toast.error("Error, try again");
    });
  },
});

export default addToCartSlice.reducer;
