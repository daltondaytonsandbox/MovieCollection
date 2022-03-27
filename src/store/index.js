import { createStore } from "vuex";

export default createStore({
  state: {
    movies: [
      {
        id: 1,
        title: "The Lord of the Rings: The Fellowship of the Ring",
      },
      {
        id: 2,
        title: "The Lord of the Rings: The Two Towers",
      },
      {
        id: 3,
        title: "The Lord of the Rings: The Return of the King",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
