import React from "react";

import "./SearchResults.css";

const SearchResults = (props) => (
  <div className="resultcontainer">
    <h2>{props.movieTitle ? `Results for "${props.movieTitle}"` : <></>}</h2>
    <ul>
      {props.searchedMovie?.map((movie, i) => {
        return (
          <div className="titleandbutton">
            <li key={i}>{movie.Title}</li>
            <button>Nominate</button>
          </div>
        );
      })}
    </ul>
  </div>
);

export default SearchResults;
