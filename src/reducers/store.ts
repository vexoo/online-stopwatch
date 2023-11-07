import { configureStore } from "@reduxjs/toolkit";
import stopwatchReducer from "./stopwatchReducer";
import styleReducer from "./styleReducer";
import countdownReducer from "./countdownReducer";
import alertReducer from "./alertReducer";

export const store = configureStore({
  reducer: {
    stopwatch: stopwatchReducer,
    countdown: countdownReducer,
    style: styleReducer,
    alert: alertReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
