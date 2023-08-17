import { createSlice } from "@reduxjs/toolkit";
import { updateTask } from "../actions/index";
import { sharedExtraLogic } from "../sharedLogic/sharedLogic";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: { value: 3000 },
  reducers: {
    // ...
  },
  extraReducers: (builder) => {
    builder.addCase(updateTask, (state, action) => {
      console.log("In tasksSlice");

      // Shared action logic applicable to tasksSlice
      state.value += action.payload;
    });
    builder.addCase("ANOTHER_SHARED_ACTION", sharedExtraLogic);
  },
});

export default tasksSlice.reducer;
