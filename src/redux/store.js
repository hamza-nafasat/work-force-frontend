import { configureStore } from "@reduxjs/toolkit";
import authApis from "./api/authApi";
import authReducer from "./reducer/authReducer";
import labourApis from "./api/labourApi";

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
