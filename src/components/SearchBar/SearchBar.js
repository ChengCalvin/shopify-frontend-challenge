import React from "react";
import SearchIcon from "../../images/searchicon.png";

import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="searchcontainer">
      <img className="searchicon" src={SearchIcon} alt="search" />
      <input
        type="text"
        placeholder="Search"
        onChange={props.inputChanged}
        value={props.movieTitle}
        onKeyPress={props.enterPressed}
      />
    </div>
  );
};

export default SearchBar;
