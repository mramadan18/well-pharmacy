import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getUses = createAsyncThunk("usesSlice/fetchUses", async () => {
  const { data } = await baseUrl.get("/category/uses");
  return data;
});

const usesSlice = createSlice({
  name: "usesSlice",
  initialState: {
    loading: true,
    uses: [],
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUses.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUses.fulfilled, (state, action) => {
      state.loading = false;
      state.uses = action.payload;
    });
    builder.addCase(getUses.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default usesSlice.reducer;
