import { configureStore } from "@reduxjs/toolkit";
import logSlice from "./logSlice";

export const store = configureStore({
  reducer: {
    logPagereducer: logSlice,
  },
});
