import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApiPoint= createApi({

    reducerPath: "userApi",

    baseQuery: fetchBaseQuery({

        baseUrl: "http://localhost:8090",
        credentials: "include"
    }),

    endpoints: (builder)=> ({

        login: builder.mutation({

            query: (data)=> ({

                url: "/api/v1/auth/login", 
                method: "POST",
                body: data
            })
        }),


    })
})

export const {useLoginMutation} = authApiPoint;