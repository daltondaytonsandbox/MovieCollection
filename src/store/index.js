import MovieService from "@/services/MovieService";
import { createStore } from "vuex";

export default createStore({
  state: {
    movies: [],
  },
  getters: {},
  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies;
    },
  },
  actions: {
    fetchMovies({ commit }) {
      return MovieService.getMovies()
        .then((response) => {
          commit("SET_MOVIES", response.data);
        })
        .catch((error) => {
          throw error;
        });
    },
  },
  modules: {},
});
