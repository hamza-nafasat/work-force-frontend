import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getEnv from "../../config/config.js";

const sensorApis = createApi({
  reducerPath: "sensorApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getEnv("SERVER_URL")}/api/sensor`, credentials: "include" }),
  endpoints: (builder) => ({
    // add new sensor
    // --------------
    addSensor: builder.mutation({
      query: (data) => ({
        url: "/create",
        method: "POST",
        body: data,
      }),
    }),

    // get all sensors
    // ---------------
    getAllSensors: builder.query({
      query: () => ({
        url: "/all",
        method: "GET",
      }),
    }),

    // get single sensor
    // -----------------
    getSingleSensor: builder.query({
      query: ({ sensorId }) => ({
        url: `/single/${sensorId}`,
        method: "GET",
      }),
    }),

    // update sensor
    // --------------
    updateSingleSensor: builder.mutation({
      query: ({ sensorId, data }) => ({
        url: `/single/${sensorId}`,
        method: "PUT",
        body: data,
      }),
    }),

    // delete sensor
    // --------------
    deleteSingleSensor: builder.mutation({
      query: ({ sensorId }) => ({
        url: `/single/${sensorId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddSensorMutation,
  useGetAllSensorsQuery,
  useGetSingleSensorQuery,
  useUpdateSingleSensorMutation,
  useDeleteSingleSensorMutation,
} = sensorApis;
export default sensorApis;
