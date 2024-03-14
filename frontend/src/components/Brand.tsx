import { Link } from "react-router-dom";

import brandStyles from "../assets/styles/Brand.module.css";

const Brand = () => {
  return (
    <Link to="/">
      <div className={brandStyles.brand}>
        <h1>G</h1>
      </div>
    </Link>
  );
};

export default Brand;
