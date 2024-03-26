import { createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios.ts";

const initialState = {
  isSidebarOpen: false,
  categoryLoading: false,
  categories: [],
};

export const generalSlice = createSlice({
  name: "generalSlice",
  initialState,
  reducers: {
    setGeneralFields: (state, { payload }) => ({ ...state, ...payload }),
    startCategoryLoading: (state) => ({ ...state, categoryLoading: true }),
    stopCategoryLoading: (state) => ({ ...state, categoryLoading: false }),
  },
});

export const { setGeneralFields, startCategoryLoading, stopCategoryLoading } =
  generalSlice.actions;

export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch(startCategoryLoading());
    const response = await axios.get(`categories.php`);
    dispatch(setGeneralFields({ categories: response.data.categories }));
    dispatch(stopCategoryLoading());
  } catch (error) {
    console.error(error);
  }
};
export default generalSlice.reducer;
