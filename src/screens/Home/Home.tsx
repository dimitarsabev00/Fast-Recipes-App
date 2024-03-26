import "./styles.scss";
import { CategoryList, Loader, MealList, NotFound } from "../../components";
import { useSelector } from "react-redux";

const Home = () => {
  const { categories, meals, categoryLoading, mealsLoading } = useSelector(
    ({ generalSlice }) => generalSlice
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
