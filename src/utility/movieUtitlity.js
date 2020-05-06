import axios from 'axios';
require('dotenv').config()
export const getUpcomingMovies= async () => {
    const requestUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`;
   return axios.get(requestUrl);
}

export const getMovieDetail = async (movieId) => {
    const requestUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}}&language=en-US`;
   return axios.get(requestUrl);
}

export const searchMovies = async (query) => {
    const SEARCH_API_URL = `https://api.themoviedb.org/3/search/company?api_key=${process.env.API_KEY}&query=${query}`;
   return axios.get(SEARCH_API_URL);
}