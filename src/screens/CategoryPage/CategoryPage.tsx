import React, { useEffect } from "react";
import "./styles.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MealList } from "../../components";
import { fetchMealByCategory } from "../../store/slices/generalSlice";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { categoryMeals, categories } = useSelector(
    ({ generalSlice }) => generalSlice
  );
  let catDescription = "";

  if (categories) {
    categories.forEach((category) => {
      if (category?.strCategory === name)
        catDescription = category?.strCategoryDescription;
    });
  }

  useEffect(() => {
    dispatch(fetchMealByCategory(name));
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
