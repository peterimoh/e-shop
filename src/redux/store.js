import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        })
})
