import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getRoom = createAsyncThunk("roomSlice/fetchRoom", async (id) => {
  const { data } = await baseUrl.get(`/hotels/rooms/${id}`);
  return data;
});

const roomSlice = createSlice({
  name: "roomSlice",
  initialState: {
    loading: true,
    room: [],
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRoom.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getRoom.fulfilled, (state, action) => {
      state.loading = false;
      state.room = action.payload;
    });
    builder.addCase(getRoom.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default roomSlice.reducer;
