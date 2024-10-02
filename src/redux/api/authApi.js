import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getEnv from "../../config/config.js";

const authApis = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getEnv("SERVER_URL")}/api`, credentials: "include" }),

  endpoints: (builder) => ({
    // login
    // -----
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),

    // get my profile
    // --------------
    getMyProfile: builder.query({
      query: () => ({
        url: "/auth/my-profile",
        method: "GET",
      }),
    }),

    // logout
    // ------
    logout: builder.query({
      query: () => ({
        url: "/auth/logout",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useGetMyProfileQuery, useLogoutQuery } = authApis;
export default authApis;
