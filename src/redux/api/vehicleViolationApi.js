import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getEnv from "../../config/config.js";

const vehicleViolationApis = createApi({
  reducerPath: "vehicleViolationApis",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getEnv("SERVER_URL")}/api/vehicleViolation`,
    credentials: "include",
  }),

  endpoints: (builder) => ({
    // add new vehicle violation
    // --------------------------------
    addVehicleViolation: builder.mutation({
      query: (data) => ({
        url: "/create",
        method: "POST",
        body: data,
      }),
    }),

    // get all vehicle violations
    // --------------------------------
    getAllVehicleViolations: builder.query({
      query: () => ({
        url: "/all",
        method: "GET",
      }),
    }),

    // get single vehicle violation
    // --------------------------------
    getSingleVehicleViolation: builder.query({
      query: ({ VehicleViolationId }) => ({
        url: `/single/${VehicleViolationId}`,
        method: "GET",
      }),
    }),

    // update vehicle violation
    // --------------------------------
    updateSingleVehicleViolation: builder.mutation({
      query: ({ VehicleViolationId, data }) => ({
        url: `/single/${VehicleViolationId}`,
        method: "PUT",
        body: data,
      }),
    }),

    // delete single vehicle violation
    // --------------------------------
    deleteSingleVehicleViolation: builder.mutation({
      query: ({ VehicleViolationId }) => ({
        url: `/single/${VehicleViolationId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddVehicleViolationMutation,
  useGetAllVehicleViolationsQuery,
  useGetSingleVehicleViolationQuery,
  useDeleteSingleVehicleViolationMutation,
  useUpdateSingleVehicleViolationMutation,
} = vehicleViolationApis;
export default vehicleViolationApis;
