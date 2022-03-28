import { createStore } from "vuex";
import MovieService from "@/services/MovieService";

export default createStore({
  state: {
    user: "Dalton Dayton",
    perPage: 2,
    totalMovies: 0,
    movies: [],
    movie: {},
    flashMessage: "",
  },
  mutations: {
    ADD_MOVIE(state, movie) {
      state.movies.push(movie);
    },
    SET_MOVIES(state, movies) {
      state.movies = movies;
    },
    SET_MOVIE(state, movie) {
      state.movie = movie;
    },
  },
  actions: {
    createMovie({ commit }, movie) {
      MovieService.postMovie(movie)
        .then(() => {
          commit("ADD_MOVIE", movie);
        })
        .catch((error) => {
          throw error;
        });
    },
    fetchMovies({ commit }, page) {
      return MovieService.getMovies(this.state.perPage, page)
        .then((response) => {
          this.state.totalMovies = response.headers["x-total-count"];
          commit("SET_MOVIES", response.data);
        })
        .catch((error) => {
          throw error;
        });
    },
    fetchMovie({ commit, state }, id) {
      const existingMovie = state.movies.find((movie) => movie.id === id);
      if (existingMovie) {
        commit("SET_MOVIE", existingMovie);
      } else {
        return MovieService.getMovie(id)
          .then((response) => {
            commit("SET_MOVIE", response.data);
          })
          .catch((error) => {
            throw error;
          });
      }
    },
  },
  modules: {},
});
