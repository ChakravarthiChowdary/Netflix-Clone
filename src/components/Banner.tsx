import React, { useEffect, useState } from "react";

import Movie, { MovieType } from "../models/Movie";
import axios from "../utils/axios";
import { requestNetflixOriginals } from "../utils/requests";
import "./Banner.css";

function truncateString(str: string, num: number) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

const Banner = () => {
  const [movie, setMovie] = useState<MovieType>();

  useEffect(() => {
    (async () => {
      const result = await axios(requestNetflixOriginals);

      const randomMovie =
        result.data.results[
          Math.floor(Math.random() * result.data.results.length - 1)
        ];

      setMovie(
        new Movie(
          randomMovie.id,
          randomMovie.original_name,
          `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`,
          randomMovie.overview
        )
      );
    })();
  }, []);

  if (!movie) {
    return <></>;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${movie?.imageURL})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title}</h1>
        <div className="banner__buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h4 className="banner__description">
          {truncateString(movie?.description!, 150)}
        </h4>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
};

export default Banner;
