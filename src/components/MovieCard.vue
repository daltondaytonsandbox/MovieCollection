<template>
  <p>---</p>
  <p>{{ movie.id }}</p>
  <h3>{{ movie.title }}</h3>
  <p>{{ movie.director }}</p>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
