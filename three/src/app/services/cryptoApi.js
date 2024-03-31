import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com",
    prepareHeaders: (header) => {
      header.set(
        "X-RapidAPI-Key",
        "cc54ccfabamshc14aefe0e72b3d9p1ae272jsnf05e04d172fa"
      );
      header.set("X-RapidAPI-Host", "coinranking1.p.rapidapi.com");
      return header;
    },
  }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: (args) => {
        return {
          url: "/coins",
          params: {
            referenceCurrencyUuid: "yhjMzLPhuIDl",
            timePeriod: "24h",
            "tiers[0]": "1",
            orderBy: "marketCap",
            orderDirection: "desc",
            limit: "50",
            offset: "0",
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCoinsQuery } = cryptoApi;
