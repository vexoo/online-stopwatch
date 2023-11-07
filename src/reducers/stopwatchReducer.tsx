import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../reducers/store";

interface StopwatchState {
  isRunning: boolean;
  elapsedTime: number;
}

const initialState: StopwatchState = {
  isRunning: false,
  elapsedTime: 0
};

export const stopwatchSlice = createSlice({
  name: "stopwatch",
  initialState,
  reducers: {
    startTimer: state => {
      state.isRunning = true;
    },
    stopTimer: state => {
      state.isRunning = false;
    },
    resetTimer: state => {
      state.isRunning = false;
      state.elapsedTime = 0;
    },
    incrementTime: state => {
      state.elapsedTime += 10;
    }
  }
});

export const { startTimer, stopTimer, resetTimer, incrementTime } =
  stopwatchSlice.actions;

export const selectIsRunning = (state: RootState) => state.stopwatch.isRunning;
export const selectElapsedTime = (state: RootState) => state.stopwatch.elapsedTime;

export default stopwatchSlice.reducer;
