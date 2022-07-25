<template>
  <div class="clas" :style="imageStyleObject">
    <div class="bl">
      <h1><strong>Movie:</strong>{{ movie.original_title }}</h1>
      <h1><strong>Original Lang:</strong> {{movie.original_language}}</h1>
      <h2><strong>OVERVIEW:</strong>{{movie.overview}}</h2>
      <div class="smallBLock">
        <small><strong>Date:</strong> {{movie.release_date}}</small><br>
        <small><strong>Vote Average:</strong> {{movie.vote_average}}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
      movie: {},
    };
  },
  methods: {
    async getMovieById() {
      const apiKey = "fa61e6fa7724edd99048bc5f0b11ae72";
      let res = (
        await fetch(
          `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${apiKey}`
        )
      );
      this.movie = await res.json();
    },
  },
  computed:{
    imageStyleObject() {
      return {
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${this.movie.poster_path})`,
      }
    },
  }, 
  mounted() {
    this.getMovieById();
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
strong{
  color: red;
}
.clas {
  background-repeat: no-repeat;
  background-size: 50% auto;
  background-position: left center;
  width: 100%;
  height: 100vh;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
}
.clas::before {
  content: '';
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
}
.bl {
  position: relative;
  z-index: 10;
  /* position: absolute;
  right: 18%; */
  width: 50%;
  display: block;
  background-color: black;
  padding: 90px 61px;
  /* width: 500px; */
  text-align: justify;
}
.smallBLock{
  display: block;
  padding-top: 15%;
}
</style>