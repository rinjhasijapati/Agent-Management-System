import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import { authApi } from './authApi.ts';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import countryReducer from '../redux/country/countrySlice.ts';
import {countryApi} from "./country/countryApi.ts";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        country: countryReducer,
        [authApi.reducerPath]: authApi.reducer,
        [countryApi.reducerPath]: countryApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, countryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
