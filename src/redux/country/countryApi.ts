import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

interface Country {
    id: number,
    country_name: string,
    country_code: string,
}

interface MetaData {
    total: number;
    last_page: number;
}

interface CountryResponse {
    data: Country[];
    meta: MetaData;
}

export const countryApi = createApi({
    reducerPath: 'countryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        // headers: {"Accept": "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}`},
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            headers.set("Accept", "application/json");
            return headers;
        },
        credentials: "include",
    }),
    endpoints: (builder) => ({
        addCountry: builder.mutation<Country, Partial<Country>>({
            query: (newCountry) => ({
                url: '/countries',
                method: 'POST',
                body: newCountry,
            }),

            onQueryStarted: async (newCountry, { dispatch, queryFulfilled }) => {
                const queryArgs = {page: 1, per_page: 10};
                const patchResult = dispatch(
                    countryApi.util.updateQueryData('getCountries', queryArgs, (draft) => {
                        draft.data.push({
                            id: -1,
                            country_name: newCountry.country_name!,
                            country_code: newCountry.country_code!,
                        });
                    })
                );
                try {
                    const { data } = await queryFulfilled;
                    patchResult.undo();
                    dispatch(
                        countryApi.util.updateQueryData('getCountries', queryArgs, (draft) => {
                            const index = draft.data.findIndex((country: Country) => country.id === -1);
                            if (index !== -1) {
                                draft.data[index] = {
                                    ...data,
                                };
                            }
                        })
                    );
                } catch {
                    patchResult.undo();
                }
            },
        }),
        getCountries: builder.query<CountryResponse, {page: number; per_page: number; searchTerm?: string}>({
            query: ({page, per_page, searchTerm}) => {
                let url = `countries?page=${page}&per_page=${per_page}`;
                if(searchTerm) {
                    url += `&search=${encodeURIComponent(searchTerm)}`;
                }
                return url;
            }
                // `countries?page=${page}&per_page=${per_page}`,
        }),
        deleteCountry: builder.mutation<void, number>({
            query: (id) => ({
                url: `/countries/${id}`,
                method: 'DELETE',
            }),
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
                const queryArgs = {page: 1, per_page: 10};
                const patchResult = dispatch(
                    countryApi.util.updateQueryData('getCountries', queryArgs, (draft) => {
                        // return draft.filter((country) => country.id !== id);
                        if(Array.isArray(draft.data)) {
                            const index = draft.data.findIndex((country: Country) => country.id === id);
                            if (index !== -1) {
                                draft.data.splice(index, 1);
                            }
                        }
                    })
                );
                try {
                    await queryFulfilled;
                } catch {
                    patchResult.undo();
                }
            }

        }),
    })
});

export const { useAddCountryMutation, useGetCountriesQuery, useDeleteCountryMutation } = countryApi;
export default countryApi.reducer;






