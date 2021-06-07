import {
  requestActionMovies,
  requestComedyMovies,
  requestDocumentaryMovies,
  requestHorrorMovies,
  requestNetflixOriginals,
  requestRomanticMovies,
  requestTopRated,
  requestTrending,
} from "./requests";

export const categories = [
  { title: "Netflix Originals", fetchURL: requestNetflixOriginals },
  { title: "Trending Now", fetchURL: requestTrending },
  { title: "Top Rated", fetchURL: requestTopRated },
  { title: "Action Movies", fetchURL: requestActionMovies },
  { title: "Comedy Movies", fetchURL: requestComedyMovies },
  { title: "Horror Movies", fetchURL: requestHorrorMovies },
  { title: "Romance Movies", fetchURL: requestRomanticMovies },
  { title: "Documentaries", fetchURL: requestDocumentaryMovies },
];
