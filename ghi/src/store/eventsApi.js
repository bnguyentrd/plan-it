import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventsApi = createApi({
  reducerPath: "events",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:8001/events/"
    baseUrl: `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/events`,
  }),
  endpoints: (builder) => ({
    getEvents: builder.query({
      // query: () => 'http://localhost:8001/events/',
      query: () => `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/events`,
    }),
  }),
});

export const { useGetEventsQuery } = eventsApi;
