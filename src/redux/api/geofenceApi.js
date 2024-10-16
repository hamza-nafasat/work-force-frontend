import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getEnv from "../../config/config.js";

const geofenceApis = createApi({
  reducerPath: "geofenceApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getEnv("SERVER_URL")}/api/geofence`, credentials: "include" }),

  endpoints: (builder) => ({
    // add new geofence
    // --------------
    addGeofence: builder.mutation({
      query: (data) => ({
        url: "/create",
        method: "POST",
        body: data,
      }),
    }),

    // get all geofences
    // ---------------
    getAllGeofences: builder.query({
      query: () => ({
        url: "/all",
        method: "GET",
      }),
    }),

    // get single geofence
    // -----------------
    getSingleGeofence: builder.query({
      query: ({ geofenceId }) => ({
        url: `/single/${geofenceId}`,
        method: "GET",
      }),
    }),

    // update geofence
    // ------------
    updateSingleGeofence: builder.mutation({
      query: ({ geofenceId, data }) => ({
        url: `/single/${geofenceId}`,
        method: "PUT",
        body: data,
      }),
    }),

    // delete geofence
    // ------------
    deleteSingleGeofence: builder.mutation({
      query: ({ geofenceId }) => ({
        url: `/single/${geofenceId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddGeofenceMutation,
  useGetAllGeofencesQuery,
  useGetSingleGeofenceQuery,
  useUpdateSingleGeofenceMutation,
  useDeleteSingleGeofenceMutation,
} = geofenceApis;

export default geofenceApis;
