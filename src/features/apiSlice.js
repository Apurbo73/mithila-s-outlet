import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mithilas-outlet.onrender.com"
  }),
  endpoints: builder => ({
    getGrocery: builder.query({
      query: () => `/products`
    })
  })
});
export const { useGetGroceryQuery } = apiSlice;
