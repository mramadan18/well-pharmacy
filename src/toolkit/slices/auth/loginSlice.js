import baseUrl from "@/baseURL";
import toast from "react-hot-toast";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const login = createAsyncThunk("loginSlice/login", async (params) => {
  const { data } = await baseUrl.post("/accounts/login/", params);
  return data;
});

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    loading: false,
    user: [],
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
      toast.loading("Loading...");
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const loginTime = new Date();
      state.loading = false;
      state.user = action.payload;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("loginTime", loginTime);

      toast.remove();
      toast.success("You are logged in successfully");
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.remove();
      toast.error("Error, check the data and try again");
    });
  },
});

export default loginSlice.reducer;
