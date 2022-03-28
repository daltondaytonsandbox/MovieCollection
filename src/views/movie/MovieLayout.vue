<template>
  <div v-if="movie">
    <h1>{{ movie.title }} ({{ movie.release }})</h1>
    <div id="nav">
      <router-link :to="{ name: 'MovieDetails' }">Details</router-link>
      |
      <router-link :to="{ name: 'MovieEdit' }">Edit</router-link>
    </div>
    <router-view :movie="movie" />
  </div>
</template>

<script>
export default {
  computed: {
    movie() {
      return this.$store.state.movie;
    },
  },
};
</script>
