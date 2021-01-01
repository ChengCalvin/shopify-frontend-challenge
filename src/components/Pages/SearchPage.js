import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import NomineeList from "../NomineeList/NomineeList";
//import Spinner from "../UI/Spinner/Spinner";

import "./SearchPage.css";
const SearchPage = () => {
  /* 
        1. title
        2. search bar
        3. search result
        4. nominate section
        
        */
  const [movieTitle, setMovieTitle] = useState("");
  const [searchedMovie, setSearchedMovie] = useState();

  const searchBarChangeHandler = (event) => {
    event.preventDefault();
    setMovieTitle(event.target.value);
  };

  const movieSearchSubmitHandler = (event) => {
    if (event.key === "Enter") {
      fetch(`http://www.omdbapi.com/?s=${movieTitle}&apikey=6416bd9f`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.Search);
          setSearchedMovie(data.Search);
        });
    }
  };

  return (
    <div className="container">
      <h1>The Shoppies</h1>
      <div className="searchsection">
        <p>Movie Title</p>
        <SearchBar
          inputChanged={searchBarChangeHandler}
          movieTitle={movieTitle}
          enterPressed={movieSearchSubmitHandler}
        />
      </div>
      <div className="resultandnominee">
        <SearchResults searchedMovie={searchedMovie} movieTitle={movieTitle} />
        <NomineeList />
      </div>
    </div>
  );
};

export default SearchPage;
