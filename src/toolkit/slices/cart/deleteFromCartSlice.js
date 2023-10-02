import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const deleteFromCart = createAsyncThunk(
  "deleteFromCartSlice/deleteCart",
  async (params) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await baseUrl.delete(
      `/cart/cart_items/${params}/`,
      config
    );
    return data;
  }
);

const deleteFromCartSlice = createSlice({
  name: "deleteFromCartSlice",
  initialState: {
    loading: false,
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteFromCart.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteFromCart.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(deleteFromCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default deleteFromCartSlice.reducer;
