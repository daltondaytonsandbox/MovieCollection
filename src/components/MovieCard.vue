<template>
  <h3>{{ movie.title }}</h3>
  <p>Starring:</p>
  <span v-for="(actor, index) in movie.starring.slice(0, 3)" :key="index">
    {{ actor }}<span v-if="index != 2">, </span>
  </span>
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
