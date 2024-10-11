import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getEnv from "../../config/config.js";

const userApis = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getEnv("SERVER_URL")}/api/user`, credentials: "include" }),
  endpoints: (builder) => ({
    // add new user
    // --------------
    addUser: builder.mutation({
      query: (data) => ({
        url: "/create",
        method: "POST",
        body: data,
      }),
    }),

    // get all user
    // ---------------
    getAllUsers: builder.query({
      query: () => ({
        url: "/all",
        method: "GET",
      }),
    }),

    // get single user
    // -----------------
    getSingleUser: builder.query({
      query: ({ userId }) => ({
        url: `/single/${userId}`,
        method: "GET",
      }),
    }),

    // update user
    // --------------
    updateSingleUser: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/single/${userId}`,
        method: "PUT",
        body: data,
      }),
    }),

    // delete sensor
    // --------------
    deleteSingleUser: builder.mutation({
      query: ({ userId }) => ({
        url: `/single/${userId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddUserMutation,
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useUpdateSingleUserMutation,
  useDeleteSingleUserMutation,
} = userApis;
export default userApis;
