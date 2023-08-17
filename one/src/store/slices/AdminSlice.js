import { createSlice } from "@reduxjs/toolkit";
// import { userSlice } from "./UserSlice";
import { clearAllUsers } from "../actions/index";

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
    builder.addCase(clearAllUsers, () => {
      console.log("In adminSlice extraReducers");
      return [];
    });
  },
});

// export const {  } = adminSlice.actions;

export default adminSlice.reducer;
