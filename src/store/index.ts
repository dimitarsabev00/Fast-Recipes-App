import { configureStore } from "@reduxjs/toolkit";
import generalSliceReducer from "./slices/generalSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    generalSlice: generalSliceReducer,
  },
});

export default store;