import React from "react";
import { APP_ICONS } from "../../Context/Settings";

const Nav = ({ title }) => {
  return (
    <div className="nav-outline">
      <div className="nav-far-left">
        <h1>{title}</h1>
        <div className="input-with-icon">
          <small className="input-icon-text">{APP_ICONS.SEARCH}</small>
          <input
            type={"search"}
            placeholder="Search Clients, Contact, and more ..."
            className="search-input"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
