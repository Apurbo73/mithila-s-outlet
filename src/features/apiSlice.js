import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mithilas-outlet.onrender.com"
  }),
  endpoints: builder => ({
    //get all products:
    getGrocery: builder.query({
      query: () => `/products`
    }),
    //get single product details:
    getSingleProduct: builder.query({
      query: id => `/products/${id}`
    })
  })
});
export const { useGetGroceryQuery, useGetSingleProductQuery } = apiSlice;
