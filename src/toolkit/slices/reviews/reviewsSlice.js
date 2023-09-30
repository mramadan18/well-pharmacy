import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getReviews = createAsyncThunk(
  "reviewsSlice/fetchReviews",
  async () => {
    const { data } = await baseUrl.get("/reviews");
    return data;
  }
);

const reviewsSlice = createSlice({
  name: "reviewsSlice",
  initialState: {
    loading: false,
    reviews: [],
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReviews.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getReviews.fulfilled, (state, action) => {
      state.loading = false;
      state.reviews = action.payload.results;
      console.log(action.payload);
    });
    builder.addCase(getReviews.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default reviewsSlice.reducer;
