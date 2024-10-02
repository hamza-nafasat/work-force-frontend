import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getEnv from "../../config/config.js";

const projectApis = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getEnv("SERVER_URL")}/api/project`, credentials: "include" }),
  endpoints: (builder) => ({
    // add new project
    // --------------
    addProject: builder.mutation({
      query: (data) => ({
        url: "/create",
        method: "POST",
        body: data,
      }),
    }),

    // get all Projects
    // ---------------
    getAllProjects: builder.query({
      query: () => ({
        url: "/all",
        method: "GET",
      }),
    }),

    // get single Project
    // -----------------
    getSingleProject: builder.query({
      query: ({ projectId }) => ({
        url: `/single/${projectId}`,
        method: "GET",
      }),
    }),

    // update Project
    // --------------
    updateLabour: builder.mutation({
      query: ({ projectId, data }) => ({
        url: `/single/${projectId}`,
        method: "PUT",
        body: data,
      }),
    }),

    // delete project
    // --------------
    deleteLabour: builder.mutation({
      query: ({ projectId }) => ({
        url: `/delete/${projectId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddProjectMutation,
  useGetAllProjectsQuery,
  useGetSingleProjectQuery,
  useUpdateLabourMutation,
  useDeleteLabourMutation,
} = projectApis;
export default projectApis;
