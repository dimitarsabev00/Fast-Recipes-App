import React, { useEffect } from "react";
import "./styles.scss";
import { useParams } from "react-router-dom";
import { MealList } from "../../components";
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchMealByCategory } from "../../store/actions/fetchMealByCategory";

const CategoryPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { name } = useParams();
  const { categoryMeals, categories } = useAppSelector(
    (state: RootState) => state.generalSlice
  );
  let catDescription = "";

  if (categories) {
    categories.forEach((category) => {
      if (category?.strCategory === name)
        catDescription = category?.strCategoryDescription;
    });
  }

  useEffect(() => {
    const categoryName = name ? name : "";
    dispatch(fetchMealByCategory(categoryName));
  }, [name]);

  return (
    <main className="main-content py-5">
      <div className="container">
        <div className="cat-description px-4 py-4">
          <h2 className="text-orange fw-8">{name}</h2>
          <p className="fs-18 op-07">{catDescription}</p>
        </div>
      </div>
      {categoryMeals?.length ? <MealList meals={categoryMeals} /> : null}
    </main>
  );
};

export default CategoryPage;
