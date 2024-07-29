import {configureStore} from '@reduxjs/toolkit';
import { sendApi } from '../slice/authSlice';


export const store = configureStore({
    reducer:{
        [sendApi.reducerPath]:sendApi.reducer
    },
    middleware : (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sendApi.middleware)
})
