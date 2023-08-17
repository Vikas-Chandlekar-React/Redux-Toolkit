import { createSlice } from "@reduxjs/toolkit";
import { userSlice } from "./UserSlice";

export const adminSlice = createSlice({
  name: "admin",
  initialState: [1, 2, 3],
  reducers: {
    // clearAllUsers: (state, action) => {
    //   console.log("In adminSlice: clearAllUsers");
    //   return [];
    // },
  },
  extraReducers(builder) {
    builder.addCase(userSlice.actions.clearAllUsers, () => {
      console.log("In adminSlice extraReducers");
      return [];
    });
  },
});

export const { clearAllUsers } = adminSlice.actions;

export default adminSlice.reducer;
