const API_KEY = "1a68baa7f2310adf9f2277fe8e8e0e0e";

export const requestTrending = `/trending/all/week?api_key=${API_KEY}&language=en-US`;
export const requestNetflixOriginals = `/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const requestTopRated = `/movie/top_rated?api_key=${API_KEY}&language=en-US`;
export const requestActionMovies = `/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const requestComedyMovies = `/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const requestHorrorMovies = `/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const requestRomanticMovies = `/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const requestDocumentaryMovies = `/discover/movie?api_key=${API_KEY}&with_genres=99`;
