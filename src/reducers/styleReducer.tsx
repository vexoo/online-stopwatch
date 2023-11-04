import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../reducers/store";

interface StyleState {
  style: 1 | 2;
}

const initialState: StyleState = {
  style: 1
};

export const styleSlice = createSlice({
  name: "style",
  initialState,
  reducers: {
    changeStyle: (state, action: PayloadAction<StyleState["style"]>) => {
      //state.style = state.style === 1 ? 2 : 1;
      state.style = action.payload;
    }
  }
});

export const { changeStyle } = styleSlice.actions;

export const selectStyle = (state: RootState) => state.style.style;

export default styleSlice.reducer;
