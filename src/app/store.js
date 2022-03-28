import { configureStore } from '@reduxjs/toolkit';
import jokerReducer from '../features/joker/jokerSlice';

export const store = configureStore({
  reducer: {
    joker: jokerReducer,
  },
});
