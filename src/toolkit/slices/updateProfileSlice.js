import baseUrl from "@/baseURL";
import toast from "react-hot-toast";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const updateProfile = createAsyncThunk(
  "updateProfileSlice/patchProfile",
  async (params) => {
    const token = localStorage.getItem("token");
    const { id } = JSON.parse(localStorage.getItem("user"));

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await baseUrl.put(
      `/accounts/update_profile/${id}/`,
      params,
      config
    );
    return data;
  }
);

const updateProfileSlice = createSlice({
  name: "updateProfileSlice",
  initialState: {
    loading: false,
    profile: {},
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateProfile.pending, (state, action) => {
      state.loading = true;
      toast.loading("Loading...");
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload;
      toast.remove();
      toast.success("Your account information has been successfully updated");
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.loading = false;
      toast.remove();
      toast.error("Error, check the data and try again");
    });
  },
});

export default updateProfileSlice.reducer;
