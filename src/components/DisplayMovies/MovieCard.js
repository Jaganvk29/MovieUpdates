import React, { Fragment } from "react";
import classes from "./MovieCard.module.css";

const MovieCard = (props) => {
  return (
    <Fragment>
      <div key={props.id} className={classes.cardContainer}>
        <div className={classes.card}>
          <img src={props.imgUrl}></img>
          <div className={classes.cardintro}>
            <p>{props.name}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MovieCard;
