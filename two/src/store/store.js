import { configureStore } from "@reduxjs/toolkit";
import usersSliceReducer from "./slices/userSlice";
import tasksSliceReducer from "./slices/tasksSlice";
import sharedExtraReducer from "./slices/sharedExtraSlice";

const store = configureStore({
  reducer: {
    sharedExtra: sharedExtraReducer,
    tasks: tasksSliceReducer,
    users: usersSliceReducer,
  },
});

export default store;
