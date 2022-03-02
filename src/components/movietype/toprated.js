import React from "react";
import DisplayMovies from "../DisplayMovies/DisplayMovies";

const Toprated = (props) => {
  let rankey = Math.random;
  return (
    <DisplayMovies
      length="6"
      name="TOPRATED MOVIES"
      moviegettingtype={`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`}
    />
  );
};

export default Toprated;
