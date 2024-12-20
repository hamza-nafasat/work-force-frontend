import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getEnv from "../../config/config.js";

const labourApis = createApi({
  reducerPath: "labourApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getEnv("SERVER_URL")}/api/labour`, credentials: "include" }),
  endpoints: (builder) => ({
    // add new labour
    // --------------
    addLabour: builder.mutation({
      query: (data) => ({
        url: "/create",
        method: "POST",
        body: data,
      }),
    }),

    // get all labours
    // ---------------
    getAllLabours: builder.query({
      query: () => ({
        url: "/all",
        method: "GET",
      }),
    }),

    // get single Labour
    // -----------------
    getSingleLabour: builder.query({
      query: ({ labourId }) => ({
        url: `/single/${labourId}`,
        method: "GET",
      }),
    }),

    // update Labour
    // ------------
    updateLabour: builder.mutation({
      query: ({ LabourId, data }) => ({
        url: `/single/${LabourId}`,
        method: "PUT",
        body: data,
      }),
    }),

    // delete Labour
    // ------------
    deleteLabour: builder.mutation({
      query: ({ LabourId }) => ({
        url: `/single/${LabourId}`,
        method: "DELETE",
      }),
    }),
    // get labour score card
    // ------------
    getLabourScoreCard: builder.query({
      query: (time) => ({
        url: "/labour-score-card",
        method: "GET",
        params: {
          time: time,
        },
      }),
    }),
  }),
});

export const {
  useAddLabourMutation,
  useGetAllLaboursQuery,
  useGetSingleLabourQuery,
  useUpdateLabourMutation,
  useDeleteLabourMutation,
  useGetLabourScoreCardQuery,
} = labourApis;
export default labourApis;
