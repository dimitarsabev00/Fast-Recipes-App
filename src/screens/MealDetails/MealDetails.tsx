import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles.scss";
import Loader from "../../components/Loader/Loader";
import { CategoryList } from "../../components";
import MealSingle from "../../components/Meal/MealSingle";
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchSingleMeal } from "../../store/actions/fetchSingleMeal";

const MealDetails: React.FC = () => {
  const { id } = useParams();
  const { categories, meal, categoryLoading, mealLoading } = useAppSelector(
    (state: RootState) => state.generalSlice
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    const ID = id ? id : "";
    dispatch(fetchSingleMeal(ID));
  }, [id]);

  let ingredientsArr = [],
    measuresArr = [],
    singleMeal = {};
  if (meal && meal?.length > 0) {
    for (let props in meal[0]) {
      if (props.includes("strIngredient")) {
        if (meal[0][props]) ingredientsArr.push(meal[0][props]);
      }

      if (props.includes("strMeasure")) {
        if (meal[0][props]) {
          if (meal[0][props].length > 1) {
            measuresArr.push(meal[0][props]);
          }
        }
      }
    }

    singleMeal = {
      id: meal[0]?.idMeal,
      title: meal[0]?.strMeal,
      category: meal[0]?.strCategory,
      area: meal[0]?.strArea,
      thumbnail: meal[0]?.strMealThumb,
      instructions: meal[0]?.strInstructions,
      source: meal[0]?.strSource,
      tags: meal[0]?.strTags,
      youtube: meal[0]?.strYoutube,
      ingredients: ingredientsArr,
      measures: measuresArr,
    };
  }

  return (
    <main className="main-content bg-whitesmoke">
      {mealLoading ? <Loader /> : <MealSingle meal={singleMeal} />}
      {categoryLoading ? <Loader /> : <CategoryList categories={categories} />}
    </main>
  );
};

export default MealDetails;
