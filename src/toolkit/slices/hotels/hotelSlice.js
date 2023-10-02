import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getHotel = createAsyncThunk(
  "hotelSlice/fetchHotel",
  async (id) => {
    const { data } = await baseUrl.get(`/hotels/${id}`);
    return data;
  }
);

const hotelSlice = createSlice({
  name: "hotelSlice",
  initialState: {
    loading: true,
    hotel: [],
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHotel.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getHotel.fulfilled, (state, action) => {
      state.loading = false;
      state.hotel = action.payload;
    });
    builder.addCase(getHotel.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default hotelSlice.reducer;
