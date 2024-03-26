import React, { useState } from "react";
import "./styles.scss";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMealBySearch } from "../../store/slices/generalSlice";
import { RootState } from "../../store";

const SearchForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { meals } = useSelector(
    (state: RootState) => state.generalSlice
  );

  const handleSearchTerm = (e) => {
    e.preventDefault();
    if (e.target.value.replace(/[^\w\s]/gi, "").length !== 0) {
      setSearchTerm(e.target.value);
      setErrorMsg("");
    } else {
      setErrorMsg("Invalid search term ...");
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
