import { configureStore } from "@reduxjs/toolkit";
import stopwatchReducer from "./stopwatchReducer";
import styleReducer from "./styleReducer";

export const store = configureStore({
  reducer: {
    stopwatch: stopwatchReducer,
    style: styleReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
