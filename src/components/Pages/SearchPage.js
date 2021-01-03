import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import NomineeList from "../NomineeList/NomineeList";
import Spinner from "../UI/Spinner/Spinner";
import { useSelector } from "react-redux";

import "./SearchPage.css";
const SearchPage = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [searchedMovie, setSearchedMovie] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const nomineeList = useSelector((state) => state.nominee.nomineeList);

  const searchBarChangeHandler = (event) => {
    event.preventDefault();
    setMovieTitle(event.target.value);
  };

  const movieSearchSubmitHandler = (event) => {
    if (event.key === "Enter") {
      setIsLoading(true);
      fetch(`http://www.omdbapi.com/?s=${movieTitle}&apikey=6416bd9f`)
        .then((response) => response.json())
        .then((data) => {
          setSearchedMovie(data.Search);
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="container">
      {nomineeList.length === 5 ? (
        <div className="banner">You have added 5 Movie!</div>
      ) : (
        <></>
      )}
      <h1>The Shoppies</h1>
      <div className="searchsection">
        <p>Movie Title</p>
        <SearchBar
          inputChanged={searchBarChangeHandler}
          movieTitle={movieTitle}
          movieSearch={movieSearchSubmitHandler}
        />
      </div>
      <div className="resultandnominee">
        {isLoading ? (
          <Spinner />
        ) : (
          <SearchResults
            searchedMovie={searchedMovie}
            movieTitle={movieTitle}
          />
        )}
        <NomineeList />
      </div>
    </div>
  );
};

export default SearchPage;
