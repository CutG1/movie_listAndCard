<template>
  <div class="app">
    <div class="wrapper" v-if="movies.length">
      <movie-card
        v-for="(movie, index) in movies"
        :key="index"
        :movie="movie"
      ></movie-card>
    </div>
    <!-- <h5 v-else-if="!loading">Ma'lumot topilmadi</h5> -->
    <div class="loader" v-else-if="loading">
      <img src="@/assets/Ellipsis-2s-200px.svg" alt="" />
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";
export default {
  components: { MovieCard },
  data() {
    return {
      movies: [],
      loading: false,
    };
  },
  methods: {
    async getMovies() {
      try {
        this.loading = true;
        const apiKey = "fa61e6fa7724edd99048bc5f0b11ae72";
        let res = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=1`
        );
        this.movies = (await res.json()).results;
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    console.log(this.$route);
    this.getMovies();
  },
};
</script>

<style>
.loader {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

* {
  box-sizing: border-box;
  background-color: #0a112a;
}

.app {
  padding-top: 100px;
  padding-bottom: 100px;
  width: 100%;
}
.wrapper {
  width: 90%;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
}
</style>