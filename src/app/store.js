import { configureStore } from '@reduxjs/toolkit';
import CreatorsReducer from '../features/CreatorsSlice';
import ProfileReducer from '../features/ProfileSlice';

export const store = configureStore({
  reducer: {
    creators: CreatorsReducer,
    profile: ProfileReducer,
  },
});
