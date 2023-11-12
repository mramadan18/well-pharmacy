import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getSliderOffers = createAsyncThunk(
  "sliderOffersSlice/fetchSliderOffers",
  async () => {
    const { data } = await baseUrl.get("/settings/sliders/", {
      headers: { "Accept-Language": localStorage.getItem("lang") },
    });
    return data;
  }
);

const sliderOffersSlice = createSlice({
  name: "sliderOffers",
  initialState: {
    loading: true,
    offers: [],
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSliderOffers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getSliderOffers.fulfilled, (state, action) => {
      state.loading = false;
      state.offers = action.payload.results;
    });
    builder.addCase(getSliderOffers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default sliderOffersSlice.reducer;
