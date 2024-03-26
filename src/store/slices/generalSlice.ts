import { createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios.ts";

const initialState = {
  isSidebarOpen: false,
  categories: [],
  categoryLoading: false,
  meals: [],
  mealsLoading: false,
  categoryMeals: [],
  categoryMealsLoading: false,
  meal: [],
  mealLoading: false,
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
export const fetchMealBySearch = (searchTerm) => async (dispatch) => {
  try {
    dispatch(setGeneralFields({ mealsLoading: true }));
    const response = await axios.get(`search.php?s=${searchTerm}`);
    dispatch(setGeneralFields({ meals: response.data.meals }));
    dispatch(setGeneralFields({ mealsLoading: false }));
  } catch (error) {
    console.error(error);
  }
};
export const fetchMealByCategory = (category) => async (dispatch) => {
  try {
    dispatch(setGeneralFields({ categoryMealsLoading: true }));
    const response = await axios.get(`filter.php?c=${category}`);
    dispatch(setGeneralFields({ categoryMeals: response.data.meals }));
    dispatch(setGeneralFields({ categoryMealsLoading: false }));
  } catch (error) {
    console.error(error);
  }
};
export const fetchSingleMeal = (id) => async (dispatch) => {
  try {
    dispatch(setGeneralFields({ mealLoading: true }));
    const response = await axios.get(`lookup.php?i=${id}`);
    dispatch(setGeneralFields({ meal: response.data.meals }));
    dispatch(setGeneralFields({ mealLoading: false }));
  } catch (error) {
    console.error(error);
  }
};

export default generalSlice.reducer;
