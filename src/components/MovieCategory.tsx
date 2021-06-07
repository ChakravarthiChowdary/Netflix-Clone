import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";

import Movie, { MovieType } from "../models/Movie";
import axios from "../utils/axios";
import "./MovieCategory.css";

interface IProps {
  title: string;
  fetchURL: string;
  largeImage: boolean;
}

const MovieCategory: React.FC<IProps> = ({ title, fetchURL, largeImage }) => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleClick = async (movie: MovieType) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  useEffect(() => {
    (async () => {
      const result = await axios.get(fetchURL);
      let moviesArray: MovieType[] = [];
      moviesArray = result.data.results.map(
        (movie: any) =>
          new Movie(
            movie.id,
            movie.title,
            largeImage
              ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
              : `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
            movie.overview
          )
      );
      setMovies(moviesArray);
    })();
  }, [fetchURL, largeImage]);

  return (
    <div className="category">
      <h2>{title}</h2>
      <div className="movie__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={movie.imageURL}
            className={`movie__poster ${largeImage && "row__posterLarge"}`}
            alt={movie.title}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && (
        <Youtube
          videoId={trailerUrl}
          opts={{
            height: "390",
            width: "100%",
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      )}
    </div>
  );
};

export default MovieCategory;
