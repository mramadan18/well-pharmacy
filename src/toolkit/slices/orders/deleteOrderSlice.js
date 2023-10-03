import baseUrl from "@/baseURL";
import toast from "react-hot-toast";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const deleteOrder = createAsyncThunk(
  "deleteOrderSlice/deleteOrder",
  async (id) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await baseUrl.delete(`/order/${id}/`, config);
    return data;
  }
);

const deleteOrderSlice = createSlice({
  name: "deleteOrderSlice",
  initialState: {
    loading: false,
    order: {},
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteOrder.pending, (state, action) => {
      state.loading = true;
      toast.loading("Loading...");
    });
    builder.addCase(deleteOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.order = action.payload;
      toast.remove();
      toast.success("The request has been successfully deleted");
    });
    builder.addCase(deleteOrder.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload;
      toast.remove();
      toast.error("Error, try again");
    });
  },
});

export default deleteOrderSlice.reducer;
