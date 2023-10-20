import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getRooms = createAsyncThunk("roomsSlice/fetchRooms", async () => {
  const { data } = await baseUrl.get("/hotels/rooms", {
    headers: { "Accept-Language": localStorage.getItem("lang") },
  });
  return data;
});

const roomsSlice = createSlice({
  name: "roomsSlice",
  initialState: {
    loading: true,
    rooms: [],
    myRoom: {},
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRooms.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getRooms.fulfilled, (state, action) => {
      state.loading = false;
      state.rooms = action.payload;
      // const { room } = JSON.parse(localStorage.getItem("user"));
      // const findRoom = state.rooms?.results?.find((item) => item.id === room);
      // state.myRoom = findRoom;
    });
    builder.addCase(getRooms.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default roomsSlice.reducer;
