import React, { useState } from "react";
import "./styles.scss";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMealBySearch } from "../../store/slices/generalSlice";

const SearchForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e) => {
    e.preventDefault();
    if (e.target.value.replace(/[^\w\s]/gi, "").length !== 0) {
      setSearchTerm(e.target.value);
    }
  };

  const handleSearchResult = (e) => {
    e.preventDefault();
    navigate("/");
    dispatch(fetchMealBySearch(searchTerm));
  };

  return (
    <form
      className="search-form flex align-center"
      onSubmit={(e) => handleSearchResult(e)}
    >
      <input
        type="text"
        className="form-control-input text-dark-gray fs-15"
        placeholder="Search recipes here ..."
        onChange={(e) => handleSearchTerm(e)}
      />
      <button
        type="submit"
        className="form-submit-btn text-white text-uppercase fs-14"
      >
        <BsSearch className="btn-icon" size={20} />
      </button>
    </form>
  );
};

export default SearchForm;
