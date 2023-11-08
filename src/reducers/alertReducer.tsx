import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../reducers/store";

interface alertState {
  audioFile: string;
  soundLevel: number;
}

const initialState: alertState = {
  audioFile: "audio/alert_error-01.wav",
  soundLevel: 0
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAudioFile: (state, action: PayloadAction<string>) => {
      state.audioFile = action.payload;
    },
    setSoundLevel: (state, action: PayloadAction<number>) => {
      state.soundLevel = action.payload;
    }
  }
});

export const { setAudioFile, setSoundLevel } = alertSlice.actions;

export const selectAudioFile = (state: RootState) => state.alert.audioFile;
export const selectSoundLevel = (state: RootState) => state.alert.soundLevel;

export default alertSlice.reducer;
