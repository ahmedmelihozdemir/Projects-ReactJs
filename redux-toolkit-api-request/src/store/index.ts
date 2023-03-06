import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import todoSlice from "../features/todoSlice";
import userSlice from "../features/userSlice";

const store = configureStore({
  reducer: {
    todos: todoSlice,
    user: userSlice,
  },
});

export default store;

//Reducer içine girilen state'lerin typlerini otomatik olarak alınıyor.
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
