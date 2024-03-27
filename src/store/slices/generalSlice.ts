import { Dispatch, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios.ts";
import { InitialState } from "../../Types.ts";
import { fetchCategories } from "../actions/fetchCategories.ts";
import store from "../index.ts";

const initialState: InitialState = {
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.categoryLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categoryLoading = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.categoryLoading = false;
    });
  },
});

export const { setGeneralFields } = generalSlice.actions;

export const fetchMealBySearch =
  (searchTerm: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(setGeneralFields({ mealsLoading: true }));
      const response = await axios.get(`search.php?s=${searchTerm}`);
      dispatch(setGeneralFields({ meals: response.data.meals }));
      dispatch(setGeneralFields({ mealsLoading: false }));
    } catch (error) {
      console.error(error);
    }
  };
export const fetchMealByCategory =
  (category: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(setGeneralFields({ categoryMealsLoading: true }));
      const response = await axios.get(`filter.php?c=${category}`);
      dispatch(setGeneralFields({ categoryMeals: response.data.meals }));
      dispatch(setGeneralFields({ categoryMealsLoading: false }));
    } catch (error) {
      console.error(error);
    }
  };
export const fetchSingleMeal = (id: number) => async (dispatch: Dispatch) => {
  try {
    dispatch(setGeneralFields({ mealLoading: true }));
    const response = await axios.get(`lookup.php?i=${id}`);
    dispatch(setGeneralFields({ meal: response.data.meals }));
    dispatch(setGeneralFields({ mealLoading: false }));
  } catch (error) {
    console.error(error);
  }
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default generalSlice.reducer;
