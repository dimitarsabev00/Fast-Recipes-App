import { configureStore } from "@reduxjs/toolkit";
import generalSliceReducer from "./slices/generalSlice";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    generalSlice: generalSliceReducer,
  },
});

export default store;