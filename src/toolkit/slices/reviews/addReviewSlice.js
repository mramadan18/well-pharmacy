import baseUrl from "@/baseURL";
import toast from "react-hot-toast";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const addReview = createAsyncThunk(
  "addReviewSlice/postReview",
  async (params) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await baseUrl.post("/reviews/", params, config);
    return data;
  }
);

const addReviewSlice = createSlice({
  name: "addReviewSlice",
  initialState: {
    loading: false,
    review: {},
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addReview.pending, (state, action) => {
      state.loading = true;
      state.review = {};
    });
    builder.addCase(addReview.fulfilled, (state, action) => {
      state.loading = false;
      state.review = action.payload;
      state.error = {};
      setTimeout(() => {
        toast.success("Your review sent successfully");
      }, 2000);
    });
    builder.addCase(addReview.rejected, (state, action) => {
      state.loading = false;
      state.review = {};
      state.error = action.payload;
    });
  },
});

export default addReviewSlice.reducer;
