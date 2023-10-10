import { createSlice } from "@reduxjs/toolkit";

const logSlice = createSlice({
  name: "log",
  initialState: { value: [] },
  reducers: {
    tocken: (state, action) => {
      state.value = action.payload.token;
    },
  },
});

export const { tocken } = logSlice.actions;

export default logSlice.reducer;
