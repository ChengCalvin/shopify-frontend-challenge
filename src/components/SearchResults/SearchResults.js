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
      window.localStorage.setItem(`${movieTitle}`, `${movieTitle}`);
    } else {
      alert(
        "You have Nominated 5 movies! Remove from Nominations to add new movie"
      );
    }
  };

  return (
    <div className="resultcontainer">
      {props.movieTitle ? (
        <h2>{`Results for "${props.movieTitle}"`}</h2>
      ) : (
        <></>
      )}
      <ul>
        {props.searchedMovie?.map((movie, i) => {
          return (
            <div key={i} className="titleandbutton">
              <li>{`${movie.Title} (${movie.Year})`}</li>
              <button
                type="button"
                onClick={() =>
                  addNomineeHandler(`${movie.Title} (${movie.Year})`)
                }
                disabled={nomineeList.includes(
                  `${movie.Title} (${movie.Year})`
                )}
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
