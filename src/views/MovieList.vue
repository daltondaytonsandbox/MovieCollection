<template>
  <div class="movies">
    <h1>Movies For Good</h1>
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />

    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'MovieList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >
        <span>&#60; Previous</span>
      </router-link>

      <router-link
        v-for="index in totalPages"
        :key="index"
        :to="{ name: 'MovieList', query: { page: index } }"
        :class="[index == page ? activeClass : '']"
      >
        <span>{{ index }}</span>
      </router-link>

      <router-link
        id="page-next"
        :to="{ name: 'MovieList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
      >
        <span>Next &#62;</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";
import store from "@/store/index";

export default {
  name: "MovieList",
  props: ["page"],
  components: {
    MovieCard, // register it as a child component
  },
  data() {
    return {
      activeClass: "activeClass",
    };
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
    totalPages() {
      return Math.ceil(
        this.$store.state.totalMovies / this.$store.state.perPage
      );
    },
    hasNextPage() {
      return this.page < this.totalPages;
    },
  },
  beforeRouteEnter(to, from, next) {
    store
      .dispatch("fetchMovies", parseInt(to.query.page) || 1)
      .then(next())
      .catch(() => {
        next({ name: "NetworkError" });
      });
  },
  beforeRouteUpdate(to) {
    return store
      .dispatch("fetchMovies", parseInt(to.query.page) || 1)
      .catch(() => {
        return { name: "NetworkError" };
      });
  },
};
</script>

<style scoped>
.movies {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}

.activeClass span {
  font-weight: bold;
  text-decoration: underline;
}
</style>
