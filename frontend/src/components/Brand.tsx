import { Link } from "react-router-dom";

import brandStyles from "src/styles/Brand.module.css";

const Brand = () => {
  return (
    <Link to="/">
      <div className={brandStyles.brand}>
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none text-[90px]">
          G
        </h1>
      </div>
    </Link>
  );
};

export default Brand;
