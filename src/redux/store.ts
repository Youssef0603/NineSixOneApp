import {configureStore} from '@reduxjs/toolkit';
import appSlice from './slices/appSlice';

const reducer = {
  app: appSlice,
};

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export type RootState = ReturnType<typeof store.getState>;
