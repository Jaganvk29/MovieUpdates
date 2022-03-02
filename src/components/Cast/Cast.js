import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./Cast.module.css";

const Cast = () => {
  const params = useParams();
  const apiKey = process.env.REACT_APP_API_KEY;
  let getCast = `https://api.themoviedb.org/3/movie/${params.detailID}/credits?api_key=${apiKey}&language=en-US`;

  const [casts, setcasts] = useState([]);

  useEffect(() => {
    const castData = async () => {
      const responce = await fetch(getCast);
      const responceData = await responce.json();
      const castResponceData = responceData.cast;

      const castinfo = [];

      castResponceData.forEach((cast) => {
        castinfo.push({
          name: cast.original_name,
          castimg: cast.profile_path,
          castchar: cast.character,
        });
      });

      setcasts(castinfo);
    };
    castData();
  }, [getCast]);

  const createcastimg = async () => {
    return;
  };

  return (
    <div>
      <div>
        <h2>CAST</h2>
        <hr />
      </div>

      <div className={classes.cast}>
        {casts.map(
          (castimage, index) =>
            index < 10 && (
              <div key={index} className={classes.castCard}>
                <img
                  className={classes.castimg}
                  src={"https://image.tmdb.org/t/p/w500" + castimage.castimg}
                />

                <div className={classes.castCardinfo}>
                  <p>{castimage.name}</p>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Cast;
