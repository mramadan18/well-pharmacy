const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getCategories = createAsyncThunk(
  "categoriesSlice/fetchCategories",
  async () => {
    const data = await (
      await fetch("https://backend.well-medic.com/category")
    ).json();
    return data;
  }
);

export const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state, action) => {
      return (state = action.payload);
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      return (state = action.payload);
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      return (state = action.payload);
    });
  },
});

export default categoriesSlice.reducer;
