import React, { Fragment, useRef, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import classes from "./DisplayMovies.module.css";
import { motion } from "framer-motion";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const DisplayMovies = (props) => {
  let getimage = "https://image.tmdb.org/t/p/w500";
  let requrl = props.moviegettingtype;
  const [movie, setmovie] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const uMovies = async () => {
      setError(null);
      try {
        var responce = await fetch(requrl);
        const responceData = await responce.json();

        if (!responce.ok) {
          throw new Error("SOME THING WENT WRONG ");
        }

        let tmbdupcomming = responceData.results;
        const movieDetail = [];
        tmbdupcomming.forEach((element) => {
          movieDetail.push({
            title: element.title,
            releaseDate: element.release_date,
            id: element.id,
            posterimg: getimage + element.poster_path,
            rating: element.vote_average,
            backdropimg: element.backdrop_path,
            originalLanguage: element.original_language,
            movieDescription: element.overview,
          });
        });
        setmovie(movieDetail);
      } catch (err) {
        setError(err.message);
      }
    };
    uMovies();
  }, []);
  let variants = {
    // this would override whatever x value the drag gesture is providing
    static: { x: 0 },
    swiping: {},
  };

  return (
    <Fragment>
      <section className={classes.upcomming}>
        <div className={classes.morebtndiv}>
          <motion.h1 animate={{ x: 10 }}> {props.name}</motion.h1>
          <motion.hr animate={{ x: 10 }} />

          {/*  TO IMPLMENT MORE FUNCTIONALITY BUTTON  LATER
          <button className={classes.morebtn}>MORE</button> */}
        </div>
        <div className={classes.displayMoviesouter}>
          {movie.map(
            (mov, index) =>
              index < props.length && (
                <div key={mov.id}>
                  {" "}
                  <Link to={`/details/${mov.id}`}>
                    <MovieCard
                      name={mov.title}
                      key={mov.id}
                      id={mov.id}
                      imgUrl={mov.posterimg}
                    />
                  </Link>
                </div>
              )
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default DisplayMovies;
