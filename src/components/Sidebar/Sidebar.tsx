import { ImCancelCircle } from "react-icons/im";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { setGeneralFields } from "../../store/slices/generalSlice";
import { Link } from "react-router-dom";
import { RootState } from "../../store";

const Sidebar = () => {
  const { isSidebarOpen, categories } = useSelector(
    (state: RootState) => state.generalSlice
  );
  const dispatch = useDispatch();
  return (
    <nav className={`sidebar ${isSidebarOpen ? "sidebar-visible" : ""}`}>
      <button
        type="button"
        className="navbar-hide-btn"
        onClick={() => {
          dispatch(setGeneralFields({ isSidebarOpen: false }));
        }}
      >
        <ImCancelCircle size={24} />
      </button>

      <div className="side-content">
        <ul className="side-nav">
          {categories.map((category) => (
            <li className="side-item" key={category.idCategory}>
              <Link
                to={`/meal/category/${category.strCategory}`}
                className="side-link ls-1 fs-13"
                onClick={() => {
                  dispatch(setGeneralFields({ isSidebarOpen: false }));
                }}
              >
                {category.strCategory}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
