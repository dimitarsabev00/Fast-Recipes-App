import "./styles.scss";
import { CategoryList, Loader, MealList, NotFound } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Home = () => {
  const { categories, meals, categoryLoading, mealsLoading } = useSelector(
    (state: RootState) => state.generalSlice
  );
  return (
    <main className="main-content">
      {mealsLoading ? (
        <Loader />
      ) : meals === null ? (
        <NotFound />
      ) : meals?.length ? (
        <MealList meals={meals} />
      ) : (
        ""
      )}
      {categoryLoading ? <Loader /> : <CategoryList categories={categories} />}
    </main>
  );
};

export default Home;
