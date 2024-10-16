import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getEnv from "../../config/config.js";

const alertApis = createApi({
  reducerPath: "alertApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getEnv("SERVER_URL")}/api/alert`, credentials: "include" }),

  endpoints: (builder) => ({
    // add new alert
    // --------------
    addAlert: builder.mutation({
      query: (data) => ({
        url: "/create",
        method: "POST",
        body: data,
      }),
    }),

    // get all alerts
    // ---------------
    getAllAlerts: builder.query({
      query: () => ({
        url: "/all",
        method: "GET",
      }),
    }),

    // get single alert
    // -----------------
    getSingleAlert: builder.query({
      query: ({ alertId }) => ({
        url: `/single/${alertId}`,
        method: "GET",
      }),
    }),

    // update alert
    // ------------
    updateAlert: builder.mutation({
      query: ({ alertId, data }) => ({
        url: `/update/${alertId}`,
        method: "PUT",
        body: data,
      }),
    }),

    // delete alert
    // ------------
    deleteAlert: builder.mutation({
      query: ({ alertId }) => ({
        url: `/delete/${alertId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddAlertMutation,
  useGetAllAlertsQuery,
  useGetSingleAlertQuery,
  useUpdateAlertMutation,
  useDeleteAlertMutation,
} = alertApis;
export default alertApis;
