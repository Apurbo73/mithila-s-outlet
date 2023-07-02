import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mithilas-outlet.onrender.com"
  }),
  tagTypes: ["products"],
  endpoints: builder => ({
    //get all products:
    getGrocery: builder.query({
      query: () => `/products`,
      providesTags: ["products"]
    }),
    //get single product details:
    getSingleProduct: builder.query({
      query: id => `/products/${id}`
    }),
    //add new product:
    addProduct: builder.mutation({
      query: data => ({
        url: `/products`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ["products"]
    })
  })
});
export const {
  useGetGroceryQuery,
  useGetSingleProductQuery,
  useAddProductMutation
} = apiSlice;
