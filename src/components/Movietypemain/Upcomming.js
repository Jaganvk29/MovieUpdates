import React from "react";
import DisplayMovies from "../DisplayMovies/DisplayMovies";
import classes from "./Upcomming.module.css";

const UpcommingSection = (props) => {
  return (
    <div className={classes.UpcommingSection}>
      <DisplayMovies
        key={props.id}
        length="20"
        name="UPCOMMING MOVIES"
        moviegettingtype={`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`}
      />
    </div>
  );
};

export default UpcommingSection;
