import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./Videos.module.css";
const Videos = () => {
  const params = useParams();
  const apiKey = process.env.REACT_APP_API_KEY;

  let getVideos = `https://api.themoviedb.org/3/movie/${params.detailID}/videos?api_key=${apiKey}&language=en-US`;
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    const videoData = async () => {
      const responce = await fetch(getVideos);
      const responceData = await responce.json();
      const videoResponceData = responceData.results;

      const Videoinfo = [];
      videoResponceData.forEach((video) => {
        Videoinfo.push({
          videoKey: video.key,
          videoSite: video.site,
          videoType: video.type,
        });
      });

      setvideos(Videoinfo);
    };
    videoData();
  }, [getVideos]);

  // GEETING VIDEO KEYS ONLY FOR TRAILERS DRILLING THE ARRAYS USING LOOP
  const videoTrailerKeys = [];
  for (let i = 0; i < videos.length; i++) {
    if (videos[i].videoType === "Trailer") {
      videoTrailerKeys.push(videos[i].videoKey);
    }
  }

  return (
    <div>
      <h2>Videos</h2>
      <hr />

      <iframe
        allowFullScreen="allowFullScreen"
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoTrailerKeys[0]}?autoplay=0&origin=http://example.com`}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Videos;
