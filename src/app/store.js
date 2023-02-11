import { configureStore } from '@reduxjs/toolkit';
import CreatorsReducer from '../features/CreatorsSlice';

export const store = configureStore({
  reducer: {
    creators: CreatorsReducer,
  },
});
