import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getCategories = createAsyncThunk(
  "categoriesSlice/fetchCategories",
  async () => {
    const { data } = await baseUrl.get("/category/?main_category=true", {
      headers: { "Accept-Language": localStorage.getItem("lang") },
    });
    return data;
  }
);

const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState: {
    loading: true,
    categories: [],
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default categoriesSlice.reducer;
