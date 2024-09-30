import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface User {
    id: number;
    name: string;
    email: string;
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        headers: {"Accept": "application/json"},
        credentials: "include",
    }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
            transformResponse: (response, meta) => {
                return { data: response, status: meta?.response?.status };
            }
        }),
        displayUser: builder.query<User, void>({
            query: () => ({
                url: '/me',
                method: 'GET',
            }),
        }),
        logoutUser: builder.mutation({
            query: (credentials) => ({
                url: '/logout',
                method: 'POST',
                body: credentials,
            }),
        })
    }),
});

export const {useLoginUserMutation, useDisplayUserQuery, useLazyDisplayUserQuery, useLogoutUserMutation} = authApi;

