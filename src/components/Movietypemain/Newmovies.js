import React from "react";
import DisplayMovies from "../DisplayMovies/DisplayMovies";
import classes from "./NewMovies.module.css";

const NewMoviesSection = (props) => {
  return (
    <div className={classes.NewMoviesSection}>
      <DisplayMovies
        key={props.id}
        length="20"
        name="NEW MOVIES"
        moviegettingtype={`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`}
      />
    </div>
  );
};

export default NewMoviesSection;
