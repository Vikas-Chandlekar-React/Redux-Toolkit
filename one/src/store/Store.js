import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice";
import adminReducer from "./slices/AdminSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    admin: adminReducer,
  },
});

export default store;
