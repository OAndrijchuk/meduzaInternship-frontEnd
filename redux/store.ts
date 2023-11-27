'use client'
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from './users/usersSlice'
import { userAPI } from "./users/userAPI";
import {
persistStore,
persistReducer,
FLUSH,
REHYDRATE,
PAUSE,
PERSIST,
PURGE,
REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'user',
  version: 1,
  storage,
  whitelist: ['token', 'user'],
};

const authPersistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
    reducer: {
        
        [userAPI.reducerPath]:userAPI.reducer,
        user: authPersistedReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(userAPI.middleware),
    devTools: process.env.NODE_ENV !== 'production',
})
 
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;