import { combineReducers, configureStore } from '@reduxjs/toolkit';
import moviefyReducer from '../reducers/moviefySlice'

const rootReducer = combineReducers({
  moviefy: moviefyReducer,
});


export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
