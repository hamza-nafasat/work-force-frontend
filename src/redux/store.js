import { configureStore } from "@reduxjs/toolkit/react";
import authApis from "./api/authApi";
import labourApis from "./api/labourApi";
import authSlice from "./slice/authSlice";
import projectApis from "./api/projectApi";
import sensorApis from "./api/sensorApi";
import vehicleApis from "./api/vehicleApi";
import userApis from "./api/userApi";
import alertApis from "./api/alertApi";

const store = configureStore({
  reducer: {
    // slices
    [authSlice.reducerPath]: authSlice.reducer,
    // apis
    [authApis.reducerPath]: authApis.reducer,
    [labourApis.reducerPath]: labourApis.reducer,
    [projectApis.reducerPath]: projectApis.reducer,
    [sensorApis.reducerPath]: sensorApis.reducer,
    [vehicleApis.reducerPath]: vehicleApis.reducer,
    [userApis.reducerPath]: userApis.reducer,
    [alertApis.reducerPath]: alertApis.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(authApis.middleware)
      .concat(labourApis.middleware)
      .concat(projectApis.middleware)
      .concat(sensorApis.middleware)
      .concat(vehicleApis.middleware)
      .concat(userApis.middleware)
      .concat(alertApis.middleware);
  },
});

export default store;
