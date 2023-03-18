// import axios from 'axios';
const KEY = "158819e65eb0fbf8513ba7b934c25216";
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getPopularFilms = async () => {
    try {
        const response = await fetch(
          `${BASE_URL}/trending/movie/day?api_key=${KEY}&page=1`
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const popularMovies = await response.json();
        return popularMovies;
      } catch (error) {
        console.log(error);
      }

}

export const getSearchMovies = async(query) => {
    if (!query) {
      return;
    }
    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&page=1`
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const searchMovies = await response.json();
      // console.log(searchMovies);
      return searchMovies;
    } catch (error) {
      console.log(error);
    }
  }

  export const getSearchMoviesById = async (id) => {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US`
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const searchMovies = await response.json();
      // console.log(searchMovies);
      return searchMovies;
    } catch (error) {
      console.log(error);
    }
  }

  export const getMovieCast = async (id) => {
    try {
        const response = await fetch(
          `${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const searchMovies = await response.json();
        // console.log(searchMovies);
        return searchMovies;
      } catch (error) {
        console.log(error);
      }
  }

  export const getMovieReviews = async (id) => {
    try {
        const response = await fetch(
          `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const searchMovies = await response.json();
        return searchMovies;
      } catch (error) {
        console.log(error);
      }
  }