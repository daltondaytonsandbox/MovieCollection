<template>
  <div class="home">
    <h1>Movie Collection</h1>
    <hr />
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";
export default {
  name: "HomeView",
  components: { MovieCard },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
};
</script>
