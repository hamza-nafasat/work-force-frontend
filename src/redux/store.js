import { configureStore } from "@reduxjs/toolkit";
import { authApiPoint } from "./api/authApi";

const store = configureStore({
  reducer: {

    [authApiPoint.reducerPath]: authApiPoint.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApiPoint.middleware]),
});

export default store;