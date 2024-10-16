import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getEnv from "../../config/config.js";

const notificationApis = createApi({
  reducerPath: "notificationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getEnv("SERVER_URL")}/api/notification`,
    credentials: "include",
  }),

  endpoints: (builder) => ({
    // get all notifications
    // ----------------------
    getAllNotifications: builder.query({
      query: () => ({
        url: "/all",
        method: "GET",
      }),
    }),
    // read all notifications
    // ----------------------
    readAllNotifications: builder.mutation({
      query: () => ({
        url: "/all",
        method: "PUT",
      }),
    }),
    // delete single notification
    // ----------------0---------
    deleteSingleNotification: builder.mutation({
      query: ({ notificationId }) => ({
        url: `/single/${notificationId}`,
        method: "DELETE",
      }),
    }),
    // read single notification
    // -------------------------
    readSingleNotification: builder.mutation({
      query: ({ notificationId }) => ({
        url: `/single/${notificationId}`,
        method: "PUT",
      }),
    }),
  }),
});

export const {
  useGetAllNotificationsQuery,
  useReadAllNotificationsMutation,
  useDeleteSingleNotificationMutation,
  useReadSingleNotificationMutation,
} = notificationApis;
export default notificationApis;
