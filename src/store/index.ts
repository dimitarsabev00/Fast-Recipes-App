import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./slices/generalSlice.ts";

const store = configureStore({
  reducer: {
    generalSlice,
  },
});

export default store;
