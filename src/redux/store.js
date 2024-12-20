import { configureStore } from "@reduxjs/toolkit/react";
import authApis from "./api/authApi";
import labourApis from "./api/labourApi";
import authSlice from "./slice/authSlice";
import projectApis from "./api/projectApi";
import sensorApis from "./api/sensorApi";
import vehicleApis from "./api/vehicleApi";
import userApis from "./api/userApi";
import alertApis from "./api/alertApi";
import geofenceApis from "./api/geofenceApi";
import notificationApis from "./api/notificationApi";
import userViolationApis from "./api/userViolationApi";
import vehicleViolationApis from "./api/vehicleViolationApi";

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
    [geofenceApis.reducerPath]: geofenceApis.reducer,
    [notificationApis.reducerPath]: notificationApis.reducer,
    [userViolationApis.reducerPath]: userViolationApis.reducer,
    [vehicleViolationApis.reducerPath]: vehicleViolationApis.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(authApis.middleware)
      .concat(labourApis.middleware)
      .concat(projectApis.middleware)
      .concat(sensorApis.middleware)
      .concat(vehicleApis.middleware)
      .concat(userApis.middleware)
      .concat(alertApis.middleware)
      .concat(geofenceApis.middleware)
      .concat(notificationApis.middleware)
      .concat(userViolationApis.middleware)
      .concat(vehicleViolationApis.middleware);
  },
});

export default store;
