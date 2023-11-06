import { configureStore } from "@reduxjs/toolkit";
import stopwatchReducer from "./stopwatchReducer";
import styleReducer from "./styleReducer";
import countdownReducer from "./countdownReducer";

export const store = configureStore({
  reducer: {
    stopwatch: stopwatchReducer,
		countdown: countdownReducer,
    style: styleReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
