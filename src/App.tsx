import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Sidebar } from "./components";
import { CategoryPage, Error, Home, MealDetails } from "./screens";
import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { fetchCategories } from "./store/actions/fetchCategories";
const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/meal/category/:name" element={<CategoryPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
