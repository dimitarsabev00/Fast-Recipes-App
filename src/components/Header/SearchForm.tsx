import React, { FormEvent, useState } from "react";
import "./styles.scss";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { fetchMealBySearch } from "../../store/actions/fetchMealBySearch";
import { useAppDispatch } from "../../store/hooks";

const SearchForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.value.replace(/[^\w\s]/gi, "").length !== 0) {
      setSearchTerm(e.target.value);
    }
  };

  const handleSearchResult = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/");
    dispatch(fetchMealBySearch(searchTerm));
  };

  return (
    <form
      className="search-form flex align-center"
      onSubmit={handleSearchResult}
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
