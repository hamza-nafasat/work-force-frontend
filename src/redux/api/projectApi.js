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
    updateProject: builder.mutation({
      query: ({ projectId, data }) => ({
        url: `/single/${projectId}`,
        method: "PUT",
        body: data,
      }),
    }),

    // delete project
    // --------------
    deleteProject: builder.mutation({
      query: ({ projectId }) => ({
        url: `/single/${projectId}`,
        method: "DELETE",
      }),
    }),
    // add review to project
    // --------------
    addReviewToProject: builder.mutation({
      query: ({ projectId, reviews }) => ({
        url: `/add-reviews/${projectId}`,
        method: "POST",
        body: { reviews },
      }),
    }),
  }),
});

export const {
  useAddProjectMutation,
  useGetAllProjectsQuery,
  useGetSingleProjectQuery,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
  useAddReviewToProjectMutation,
} = projectApis;
export default projectApis;
