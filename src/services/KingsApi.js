// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const KingsApi = createApi({
  reducerPath: 'KingsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4412/kings' }),
  endpoints: (builder) => ({
    getKings: builder.query({
      query: () => `/`,
    }),
    addKings:builder.mutation({
      query:(king)=>({
        url:``,
        method:'POST',
        body:king,
      }),
    }),
  }),
  
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetKingsQuery, useAddKingsMutation} = KingsApi