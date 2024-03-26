import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Sidebar } from "./components";
import { CategoryPage, Error, Home, MealDetails } from "./screens";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./store/slices/generalSlice";
const App = () => {
  const dispatch = useDispatch();
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
