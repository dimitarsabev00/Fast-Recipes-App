import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../Types.ts";
import { fetchCategories } from "../actions/fetchCategories.ts";
import { fetchMealBySearch } from "../actions/fetchMealBySearch.ts";
import { fetchMealByCategory } from "../actions/fetchMealByCategory.ts";
import { fetchSingleMeal } from "../actions/fetchSingleMeal.ts";

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
    //fetchCategories
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

    //fetchMealBySearch
    builder.addCase(fetchMealBySearch.pending, (state) => {
      state.mealsLoading = true;
    });
    builder.addCase(fetchMealBySearch.fulfilled, (state, action) => {
      state.mealsLoading = false;
      state.meals = action.payload;
    });
    builder.addCase(fetchMealBySearch.rejected, (state) => {
      state.mealsLoading = false;
    });

    //fetchMealByCategory
    builder.addCase(fetchMealByCategory.pending, (state) => {
      state.categoryMealsLoading = true;
    });
    builder.addCase(fetchMealByCategory.fulfilled, (state, action) => {
      state.categoryMealsLoading = false;
      state.meals = action.payload;
    });
    builder.addCase(fetchMealByCategory.rejected, (state) => {
      state.categoryMealsLoading = false;
    });

    //fetchSingleMeal
    builder.addCase(fetchSingleMeal.pending, (state) => {
      state.mealLoading = true;
    });
    builder.addCase(fetchSingleMeal.fulfilled, (state, action) => {
      state.mealLoading = false;
      state.meal = action.payload;
    });
    builder.addCase(fetchSingleMeal.rejected, (state) => {
      state.mealLoading = false;
    });
  },
});

export const { setGeneralFields } = generalSlice.actions;

export default generalSlice.reducer;
