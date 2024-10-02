import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    userExist: (state, action) => {
      state.user = action.payload;
    },
    userNotExist: (state) => {
      state.user = null;
    },
  },
});

export const { userExist, userNotExist } = authReducer.actions;
export default authReducer;
