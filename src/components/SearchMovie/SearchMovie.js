import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DisplayMovies from "../DisplayMovies/DisplayMovies";
import MovieCard from "../DisplayMovies/MovieCard";
import classes from "./SearchMovie.module.css";
import { Link } from "react-router-dom";
const apiKey = process.env.REACT_APP_API_KEY;

const SearchMovie = () => {
  let getimage = "https://image.tmdb.org/t/p/w500";
  const [search, setSearch] = useState([]);
  const [searchparams, setsearchparams] = useState();
  // const [search, setSearch] = useState();
  const params = useParams();
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${params.sid}&page=1&include_adult=false;
  `;
  useEffect(() => {
    const getSearchResult = async () => {
      const responce = await fetch(searchUrl);
      const responceData = await responce.json();
      const searchresults = await responceData.results;

      // console.log(searchresults);

      const movieDetail = [];
      searchresults.forEach((element) => {
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
      setSearch(movieDetail);
      setsearchparams(params);
    };
    getSearchResult();
  }, [searchUrl]);
  // console.log(search);
  return (
    <Fragment>
      <div className={classes.search}>
        <div>
          <h1>SEARCH RESULTS</h1>
          <hr />
        </div>
        <div className={classes.imgcontainer}>
          {search.map((mov) => (
            <Link to={`/details/${mov.id}`}>
              {/* <img className={classes.cardimg} src={mov.posterimg}></img> */}
              <MovieCard name={mov.title} key={mov.id} imgUrl={mov.posterimg} />
            </Link>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default SearchMovie;
