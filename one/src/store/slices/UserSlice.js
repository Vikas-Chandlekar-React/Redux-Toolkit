import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  // NOTE : In redux toolkit, state is immutable so we can use push and splice or other method that main motto is to modified original array
  reducers: {
    // ACTION : All functions in reudcers is called as microReducers
    addUser(state, action) {
      console.log("In slice = ", action.payload);
      // NOTE : No need to return word
      state.push(action.payload);
    },
    removeUser: (state, action) => {
      console.log("In slice = ", action.payload);
      state.splice(action.payload, 1);
    },
    clearAllUsers(state, action) {
      console.log("In slice : clearAllUsers");
      // DESC : Remove all elements from array
      // return [];
      // or
      return (state = []);
    },
  },
  /** NOTE : extraReducers : 
   *  If we want to use common task done by multiple slices so create extraReducers
   *  for extraReducers work we must have microReducers
   */
  extraReducers(builder) {
    builder.addCase(userSlice.actions.clearAllUsers, () => {
      console.log("In Userslice extraReducers");
      return [];
    });
  },
});

export const { addUser, removeUser, clearAllUsers } = userSlice.actions;

export default userSlice.reducer;
