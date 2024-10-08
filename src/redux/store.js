import { configureStore } from "@reduxjs/toolkit/react";
import authApis from "./api/authApi";
import labourApis from "./api/labourApi";
import authReducer from "./reducer/authReducer";
import projectApis from "./api/projectApi";
import sensorApis from "./api/sensorApi";

const store = configureStore({
  reducer: {
    // slices
    [authReducer.reducerPath]: authReducer.reducer,
    // apis
    [authApis.reducerPath]: authApis.reducer,
    [labourApis.reducerPath]: labourApis.reducer,
    [projectApis.reducerPath]: projectApis.reducer,
    [sensorApis.reducerPath]: sensorApis.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(authApis.middleware)
      .concat(labourApis.middleware)
      .concat(projectApis.middleware)
      .concat(sensorApis.middleware);
  },
});

export default store;
