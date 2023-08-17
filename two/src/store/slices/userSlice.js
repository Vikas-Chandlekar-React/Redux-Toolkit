import { createSlice } from "@reduxjs/toolkit";
import { updateValue } from "../actions/index";
import { sharedExtraLogic } from "../sharedLogic/sharedLogic";

const usersSlice = createSlice({
  name: "users",
  initialState: { value: 2000 },
  reducers: {
    // ...
  },
  extraReducers: (builder) => {
    builder.addCase(updateValue, (state, action) => {
      console.log("In userSlice");
      // Shared action logic applicable to usersSlice
      state.value += action.payload;
    });
    builder.addCase("SOME_SHARED_ACTION", sharedExtraLogic);
  },
});

export default usersSlice.reducer;
