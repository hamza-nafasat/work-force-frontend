import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getEnv from "../../config/config.js";

const vehicleApis = createApi({
  reducerPath: "vehicleApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getEnv("SERVER_URL")}/api/vehicle`, credentials: "include" }),
  endpoints: (builder) => ({
    // add new vehicle
    // --------------
    addVehicle: builder.mutation({
      query: (data) => ({
        url: "/create",
        method: "POST",
        body: data,
      }),
    }),

    // get all vehicles
    // ---------------
    getAllVehicles: builder.query({
      query: () => ({
        url: "/all",
        method: "GET",
      }),
    }),

    // get single vehicle
    // -----------------
    getSingleVehicle: builder.query({
      query: ({ vehicleId }) => ({
        url: `/single/${vehicleId}`,
        method: "GET",
      }),
      keepUnusedDataFor: 0.0001,
    }),

    // update vehicle
    // --------------
    updateSingleVehicle: builder.mutation({
      query: ({ vehicleId, data }) => ({
        url: `/single/${vehicleId}`,
        method: "PUT",
        body: data,
      }),
    }),

    // delete vehicle
    // --------------
    deleteSingleVehicle: builder.mutation({
      query: ({ vehicleId }) => ({
        url: `/single/${vehicleId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddVehicleMutation,
  useGetAllVehiclesQuery,
  useGetSingleVehicleQuery,
  useUpdateSingleVehicleMutation,
  useDeleteSingleVehicleMutation,
} = vehicleApis;
export default vehicleApis;
