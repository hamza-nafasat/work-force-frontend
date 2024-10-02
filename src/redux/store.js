import { configureStore } from "@reduxjs/toolkit/react";
import authApis from "./api/authApi";
import labourApis from "./api/labourApi";
import authReducer from "./reducer/authReducer";

const store = configureStore({
  reducer: {
    // slices
    [authReducer.reducerPath]: authReducer.reducer,
    // apis
    [authApis.reducerPath]: authApis.reducer,
    [labourApis.reducerPath]: labourApis.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authApis.middleware).concat(labourApis.middleware);
  },
});

export default store;
