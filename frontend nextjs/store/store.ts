import { configureStore } from '@reduxjs/toolkit';
import chartReducer from './chartSlice';

export const store = configureStore({
  reducer: {
    charts: chartReducer, 
  },
});

// Define types for better TypeScript integration
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;