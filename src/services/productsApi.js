
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4500' }),
  endpoints: (builder) => ({
    getproducts: builder.query({
      query: () => ({
        url:"/Products",

      })
    }),

    getproductsById: builder.query({
      query: (id) => ({
        url:`/Products/${id}`,

      })
    }),

    Deleteproduct: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: 'DELETE',
      }),
    }),

    Addproduct: builder.mutation({
    query: (product) => ({
      url: `/add`,
      method: 'POST',
      body:product ,
    }),
}),


  }),
})


export const { useGetproductsQuery, useGetproductsByIdQuery, useDeleteproductMutation,useAddproductMutation } = productsApi