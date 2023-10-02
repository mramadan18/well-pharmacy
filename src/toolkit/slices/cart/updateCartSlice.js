import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const updateCart = createAsyncThunk(
  "updateCartSlice/putCart",
  async (params) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    console.log(params.params);
    const { data } = await baseUrl.patch(
      `/cart/cart_items/${+params.id}/`,
      params.params,
      config
    );
    return data;
  }
);

const updateCartSlice = createSlice({
  name: "updateCartSlice",
  initialState: {
    loading: false,
    cart: {},
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateCart.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateCart.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(updateCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default updateCartSlice.reducer;
