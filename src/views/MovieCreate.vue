<template>
  <h1>Create an movie</h1>

  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <label>Select a category: </label>
      <select v-model="movie.category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === movie.category"
        >
          {{ option }}
        </option>
      </select>

      <h3>Name & describe your movie</h3>

      <label>Title</label>
      <input v-model="movie.title" type="text" placeholder="Title" />

      <label>Description</label>
      <input
        v-model="movie.description"
        type="text"
        placeholder="Description"
      />

      <h3>Where is your movie?</h3>

      <label>Location</label>
      <input v-model="movie.location" type="text" placeholder="Location" />

      <h3>When is your movie?</h3>
      <label>Date</label>
      <input v-model="movie.date" type="text" placeholder="Date" />

      <label>Time</label>
      <input v-model="movie.time" type="text" placeholder="Time" />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      categories: [
        "sustainability",
        "nature",
        "animal welfare",
        "housing",
        "education",
        "food",
        "community",
      ],
      movie: {
        id: "",
        category: "",
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
        organizer: "",
      },
    };
  },
  methods: {
    onSubmit() {
      const movie = {
        ...this.movie,
        id: uuidv4(),
        organizer: this.$store.state.user,
      };
      this.$store
        .dispatch("createMovie", movie)
        .then(() => {
          this.$router.push({
            name: "MovieDetails",
            params: { id: movie.id },
          });
        })
        .catch((error) => {
          this.$router.push({
            name: "ErrorDisplay",
            params: { error: error },
          });
        });
    },
  },
};
</script>
