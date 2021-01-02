import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNominee } from "../../reducers/action";

import "./SearchResults.css";

const SearchResults = (props) => {
  const nomineeList = useSelector((state) => state.nominee.nomineeList);
  const dispatch = useDispatch();

  const addNomineeHandler = (movieTitle) => {
    if (nomineeList.length < 5) {
      dispatch(addNominee(movieTitle));
    } else {
      //TODO disable all button
      console.log("list full");
    }
  };

  return (
    <div className="resultcontainer">
      <h2>{props.movieTitle ? `Results for "${props.movieTitle}"` : <></>}</h2>
      <ul>
        {props.searchedMovie?.map((movie, i) => {
          return (
            <div key={i} className="titleandbutton">
              <li>{movie.Title}</li>
              <button
                type="button"
                onClick={() => addNomineeHandler(movie.Title)}
                disabled={nomineeList.includes(movie.Title)}
              >
                Nominate
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchResults;
