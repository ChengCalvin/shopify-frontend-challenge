import React from "react";
import SearchIcon from "../../images/searchicon.png";

import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="searchcontainer">
      <img
        className="searchicon"
        src={SearchIcon}
        alt="search"
        onClick={props.movieSearch}
      />
      <input
        type="text"
        placeholder="Search Movie"
        onChange={props.inputChanged}
        value={props.movieTitle}
        onKeyPress={props.movieSearch}
      />
    </div>
  );
};

export default SearchBar;
