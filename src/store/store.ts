import { combineReducers, configureStore } from "@reduxjs/toolkit";
import noteSlice from "./noteSlice";

const rootReducer = combineReducers({
    notes: noteSlice
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
