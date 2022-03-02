import classes from "./MovieDetails.module.css";
import React, { useEffect, useState } from "react";
import DisplayMovies from "../DisplayMovies/DisplayMovies.js";
import { useParams } from "react-router-dom";
import Cast from "../Cast/Cast";
import Videos from "../Videos/Videos";

const MovieDetails = () => {
  const params = useParams();
  const movieIDs = params.detailID;

  // const [movieID, setmovieID] = useState();
  const [watch, setWatch] = useState([]);
  const [moviesinfo, setmoviesinfo] = useState([]);
  const [smMoviesinfo, setsmMoviesinfo] = useState([]);
  // const [smMovies, setsmMovies] = useState([]);
  // const [casts, setcasts] = useState([]);
  // APIKEYS
  const apiKey = process.env.REACT_APP_API_KEY;
  let watchOn = `https://api.themoviedb.org/3/movie/${movieIDs}/watch/providers?api_key=${apiKey}`;

  let findmovieurl = `https://api.themoviedb.org/3/movie/${movieIDs}?api_key=${apiKey}&language=en-US`;
  let findSimilarMovies = `https://api.themoviedb.org/3/movie/${movieIDs}/similar?api_key=${apiKey}&language=en-US&page=1`;

  // let getimage = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const getData = async () => {
      // OTT FETCH WATCH ON
      const watchResponce = await fetch(watchOn);
      const watchResponceData = await watchResponce.json();
      setWatch(watchResponceData.results);

      //FIND MOVIE CLICKED BY SER
      const responce = await fetch(findmovieurl);
      const responceData = await responce.json();
      setmoviesinfo(responceData);

      //FIND SIMILAR MOVIE CLICKED BY SER
      const smResponce = await fetch(findSimilarMovies);
      const smResponceData = await smResponce.json();
      setsmMoviesinfo(smResponceData);

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      // Get Cast DAta
    };

    getData();
  }, [findmovieurl, findSimilarMovies, watchOn]);

  //CHECKING IF ITS AVAILABLE IN INDIA
  var moviestreamdata = [];
  if (typeof watch.IN === "object") {
    if (typeof watch.IN.flatrate === "object") {
      var streamingIN = watch.IN;

      moviestreamdata.push({
        indLink: streamingIN.link,
        streamerlogo: streamingIN.flatrate[0].logo_path,
        streamerName: streamingIN.flatrate[0].provider_name,
      });
    }
  }

  return (
    <div className={classes.movieinfo}>
      <div className={classes.moviedetails}>
        <img
          className={classes.posterimg}
          src={
            "https://image.tmdb.org/t/p/original/" + moviesinfo.backdrop_path
          }
        ></img>
        <div className={classes.movieoverview}>
          <h1>{moviesinfo.original_title}</h1>
          <hr className={classes.hrline} />
          <h2>Releasedate : {moviesinfo.release_date}</h2>
          <h2>Rating : {moviesinfo.vote_average}</h2>
          <h2>Runtime : {moviesinfo.runtime}min</h2>
          <h2>Language : {moviesinfo.original_language}</h2>
          {typeof moviestreamdata === "object" &&
            typeof moviestreamdata[0] === "object" && (
              <a target="_blank" href={moviestreamdata[0].indLink}>
                {" "}
                <button className={classes.ottProviderbtn}>
                  {moviestreamdata[0].streamerName}
                </button>
              </a>
            )}
        </div>
      </div>
      <div className={classes.overView}>
        <h2> OVERVIEW </h2>
        <hr className={classes.hrline} />
        <p>{moviesinfo.overview}</p>

        <Videos />
        <Cast />
        <DisplayMovies
          name={`SIMILAR MOVIES`}
          length="6"
          moviegettingtype={findSimilarMovies}
        ></DisplayMovies>
      </div>
    </div>
  );
};

export default MovieDetails;
