import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getHotels = createAsyncThunk(
  "hotelsSlice/fetchHotels",
  async () => {
    const { data } = await baseUrl.get("/hotels", {
      headers: { "Accept-Language": localStorage.getItem("lang") },
    });
    return data;
  }
);

const hotelsSlice = createSlice({
  name: "hotelsSlice",
  initialState: {
    loading: true,
    hotels: [],
    myHotel: {},
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHotels.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getHotels.fulfilled, (state, action) => {
      state.loading = false;
      state.hotels = action.payload;
    });
    builder.addCase(getHotels.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default hotelsSlice.reducer;
