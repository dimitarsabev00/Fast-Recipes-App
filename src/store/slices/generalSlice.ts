import { Dispatch, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios.ts";
import { InitialState } from "../../Types.ts";
import { fetchCategories } from "../actions/fetchCategories.ts";
import store from "../index.ts";
import { fetchMealBySearch } from "../actions/fetchMealBySearch.ts";

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
  },
});

export const { setGeneralFields } = generalSlice.actions;

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

export default generalSlice.reducer;
