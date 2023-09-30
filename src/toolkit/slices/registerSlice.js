import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const handleRegister = createAsyncThunk(
  "registerSlice/postAccount",
  async (params) => {
    const { data } = await baseUrl.post("/accounts/register/", params);
    return data;
  }
);

const registerSlice = createSlice({
  name: "registerSlice",
  initialState: {
    loading: true,
    message: "",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleRegister.pending, (state, action) => {
        state.loading = true;
    });
    builder.addCase(handleRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload
        console.log(action.payload);
    })
    builder.addCase(handleRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
        console.log(action.payload);
    })
  },
});

export default registerSlice.reducer;