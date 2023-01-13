import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const eventsApi = createApi({
    reducerPath: 'events',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8001/events/"
    }),
    endpoints: builder => ({
        getEvents: builder.query({
            query: () => 'http://localhost:8001/events/',
        }),
    }),
})


export const { useGetEventsQuery } = eventsApi
