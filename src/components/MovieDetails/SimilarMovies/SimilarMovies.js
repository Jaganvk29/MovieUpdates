import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SimilarMovies = () => {
  const params = useParams();
  const apiKey = process.env.REACT_APP_API_KEY;
  let findSimilarMovies = `https://api.themoviedb.org/3/movie/${params.detailID}/similar?api_key=${apiKey}&language=en-US&page=1`;
  const [smMoviesinfo, setsmMoviesinfo] = useState([]);
  useEffect(() => {
    const getData = async () => {
      //FIND MOVIE CLICKED BY SER
      const smResponce = await fetch(findSimilarMovies);
      const smResponceData = await smResponce.json();
      setsmMoviesinfo(smResponceData);
    };

    getData();
  }, []);

  return <div>SimilarMovies</div>;
};

export default SimilarMovies;
