import baseUrl from "@/baseURL";
import toast from "react-hot-toast";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const register = createAsyncThunk(
  "registerSlice/postAccount",
  async (params) => {
    const { data } = await baseUrl.post("/accounts/register/", params);
    return data;
  }
);

const registerSlice = createSlice({
  name: "registerSlice",
  initialState: {
    loading: false,
    register: {},
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      state.loading = true;
      toast.loading("Loading...");
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.register = action.payload;
      state.error = {};
      toast.remove();
      toast.success("Your account has been created successfully");
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.remove();
      toast.error("Error, check the data and try again");
    });
  },
});

export default registerSlice.reducer;
