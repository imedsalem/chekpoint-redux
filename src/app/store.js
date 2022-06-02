import { configureStore } from '@reduxjs/toolkit';
import EditData from '../features/EditData';

export const store = configureStore({
  reducer: {
    EditData : EditData,
  },
});
