import React from "react";
import DisplayMovies from "../DisplayMovies/DisplayMovies";

const Upcomming = (props) => {
  return (
    <DisplayMovies
      name="UPCOMING MOVIES"
      length="6"
      moviegettingtype={`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`}
    />
  );
};

export default Upcomming;
