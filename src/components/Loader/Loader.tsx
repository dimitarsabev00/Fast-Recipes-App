import "./styles.scss";
import loader from "../../assets/loader.svg";

const Loader = () => {
  return (
    <div className="loader my-5">
      <div className="container flex align-center justify-center">
        <img src={loader} alt="" />
      </div>
    </div>
  );
};

export default Loader;
