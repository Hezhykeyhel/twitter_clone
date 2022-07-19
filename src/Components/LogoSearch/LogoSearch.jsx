import React from "react";
import "./LogoSearch.css";
import logo from "../../img/logo.png";
import { UilSearch } from "@iconscout/react-unicons";

const LogoSearch = () => {
  return (
    <div className="logoSearch">
      <img src={logo} alt="logo" />
      <div className="search">
        <input type="text" placeholder="#explore here" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
