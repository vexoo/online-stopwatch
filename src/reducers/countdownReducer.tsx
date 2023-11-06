import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../reducers/store";

interface CountdownState {
  isRunning: boolean;
  timeLeft: number;
}

const initialState: CountdownState = {
  isRunning: false,
  timeLeft: 0
};

export const countdownSlice = createSlice({
  name: "countdown",
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
      state.timeLeft = 0;
    },
    setTimer: (state, action: PayloadAction<number>) => {
      state.timeLeft = action.payload;
    },
    decrementTime: state => {
      state.timeLeft -= 10;
    }
  }
});

export const { startTimer, stopTimer, resetTimer, setTimer, decrementTime } =
  countdownSlice.actions;

export const selectIsRunning = (state: RootState) => state.countdown.isRunning;
export const selectTimeLeft = (state: RootState) => state.countdown.timeLeft;

export default countdownSlice.reducer;
