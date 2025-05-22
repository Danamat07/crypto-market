import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-rapidapi-key': process.env.REACT_APP_CRYPTO_API,
    'x-rapidapi-host': 'crypto-news51.p.rapidapi.com'
}

const baseUrl = 'https://crypto-news51.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ page = '1', limit = '10', time_frame = '24h', format = 'json' }) =>
        createRequest({ page, limit, time_frame, format }),
    }),
  }),
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;