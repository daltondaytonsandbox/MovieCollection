<template>
  <p>Directed by: {{ movie.director }}</p>
  <p>
    Screenplay by:
    <span v-for="(screen, index) in movie.screenplay" :key="index">
      {{ screen }},
    </span>
  </p>
  <p>
    Starring:
    <span v-for="(actor, index) in movie.starring" :key="index">
      {{ actor }},
    </span>
  </p>
  <p>Music by: {{ movie.music }}</p>
  <p>Runtime: {{ movie.runtime }} minutes</p>
  <p>Budget: {{ movie.budget }} - Box Office: {{ movie.boxoffice }}</p>
</template>

<script>
export default {
  props: ["movie"],
};
</script>
