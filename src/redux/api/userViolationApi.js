import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getEnv from "../../config/config.js";

const userViolationApis = createApi({
  reducerPath: "userViolationApis",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getEnv("SERVER_URL")}/api/userViolation`,
    credentials: "include",
  }),

  endpoints: (builder) => ({
    // add new user violation
    // --------------
    addUserViolation: builder.mutation({
      query: (data) => ({
        url: "/create",
        method: "POST",
        body: data,
      }),
    }),

    // get all user violations
    // ---------------
    getAllUserViolations: builder.query({
      query: () => ({
        url: "/all",
        method: "GET",
      }),
    }),

    // get single user violation
    // -----------------
    getSingleUserViolation: builder.query({
      query: ({ userViolationId }) => ({
        url: `/single/${userViolationId}`,
        method: "GET",
      }),
    }),

    // update single violation
    // ------------
    updateSingleUserViolation: builder.mutation({
      query: ({ userViolationId, data }) => ({
        url: `/single/${userViolationId}`,
        method: "PUT",
        body: data,
      }),
    }),

    // delete single violation
    // ------------
    deleteSingleUserViolation: builder.mutation({
      query: ({ userViolationId }) => ({
        url: `/single/${userViolationId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddUserViolationMutation,
  useGetAllUserViolationsQuery,
  useGetSingleUserViolationQuery,
  useDeleteSingleUserViolationMutation,
  useUpdateSingleUserViolationMutation,
} = userViolationApis;
export default userViolationApis;
