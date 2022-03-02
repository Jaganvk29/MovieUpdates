import DisplayMovies from "../DisplayMovies/DisplayMovies";

import React, { Fragment } from "react";
let rankey = Math.random;
const Popular = (props) => {
  return (
    <Fragment>
      <DisplayMovies
        length="6"
        name="POPULAR MOVIES"
        moviegettingtype={`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`}
      />
    </Fragment>
  );
};

export default Popular;
