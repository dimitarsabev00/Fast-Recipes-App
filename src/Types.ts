export interface InitialState {
  isSidebarOpen: boolean;
  categories: Category[];
  categoryLoading: boolean;
  meals: Meal[];
  mealsLoading: boolean;
  categoryMeals: Meal[];
  categoryMealsLoading: boolean;
  meal: Meal[];
  mealLoading: boolean;
}
export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}
export interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  strSource: string;
  strTags: string;
}
