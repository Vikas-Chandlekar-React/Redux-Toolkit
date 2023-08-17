import { createSlice } from "@reduxjs/toolkit";
import { updateValue } from "../actions/index";

const sharedExtraSlice = createSlice({
  name: "sharedExtra",
  initialState: { value: 1000 },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateValue, (state, action) => {
      console.log("In sharedExtraSlice");
      state.value += action.payload;
    });
  },
});

export default sharedExtraSlice.reducer;
