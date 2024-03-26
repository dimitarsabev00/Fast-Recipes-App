import "./styles.scss";
import { CategoryList, Loader } from "../../components";
import { useSelector } from "react-redux";

const Home = () => {
  const { categories, categoryLoading } = useSelector(
    ({ generalSlice }) => generalSlice
  );
  return (
    <main className="main-content">
      {categoryLoading ? <Loader /> : <CategoryList categories={categories} />}
    </main>
  );
};

export default Home;
