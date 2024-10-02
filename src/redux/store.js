import { configureStore } from "@reduxjs/toolkit";
import authApis from "./api/authApi";
import authReducer from "./reducer/authReducer";

const store = configureStore({
  reducer: {
    // slices
    [authReducer.reducerPath]: authReducer.reducer,
    // apis
    [authApis.reducerPath]: authApis.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authApis.middleware);
  },
});

export default store;
