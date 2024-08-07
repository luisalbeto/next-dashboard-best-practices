import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import pokemonsReducer from './pokemons/pokemons'; // Asegúrate de que el nombre del archivo es correcto
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { localStorageMiddleware } from './middlewares/localstorage-middleware';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hooks for useDispatch and useSelector with typed state and dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
