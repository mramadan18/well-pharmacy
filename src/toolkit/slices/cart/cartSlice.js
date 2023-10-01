import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getCart = createAsyncThunk("cartSlice/fetchCart", async () => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await baseUrl.get("/cart", config);
  return data;
});

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    loading: false,
    cart: [],
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCart.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.loading = false;
      state.cart = action.payload;
    });
    builder.addCase(getCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default cartSlice.reducer;
