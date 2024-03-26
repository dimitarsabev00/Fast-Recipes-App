import { ImCancelCircle } from "react-icons/im";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { setGeneralFields } from "../../store/slices/generalSlice";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isSidebarOpen = useSelector(
    ({ generalSlice }) => generalSlice.isSidebarOpen
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
          <li className="side-item">
            <Link
              to=""
              className="side-link ls-1 fs-13"
              onClick={() => {
                dispatch(setGeneralFields({ isSidebarOpen: false }));
              }}
            >
              Category 1
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
