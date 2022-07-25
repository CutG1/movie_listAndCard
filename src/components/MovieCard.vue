<template>
  <div class="card">
    <router-link :to="`/${movie.id}`">
      <img
        class="card-img movie-img"
        :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
        :alt="movie.title"
      />
      <div class="info">
        <h1>{{ movie.title }}</h1>
        <p>{{ movie.release_date  }}</p>
        <button>Get More Info</button>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style>
a{
  text-decoration: none;
}
.card {
  vertical-align: bottom;
  cursor: pointer;
  width: 280px;
  height: 360px;
  border-radius: 8px;
  padding: 1.5rem;
  background: white;
  position: relative;
  display: inline-block;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  margin: 20px;
}
.card:hover {
  transform: translateY(-10px);
}
.card:hover:before {
  opacity: 1;
}
.card:hover .info {
  opacity: 1;
  transform: translateY(0px);
}
.card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
  transition: 0.5s;
  opacity: 0;
}
.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px;
}
.card .info {
  position: relative;
  z-index: 3;
  color: white;
  background: transparent;
  opacity: 0;
  transform: translateY(30px);
  transition: 0.5s;
}
.card .info h1 {
  background: transparent;
  margin: 0px;
}
.card .info p {
  background: transparent;
  letter-spacing: 1px;
  font-size: 15px;
  margin-top: 8px;
}
.card .info button {
  padding: 0.6rem;
  outline: none;
  border: none;
  border-radius: 8px;
  background: white;
  color: black;
  font-weight: bold;
  cursor: pointer;
  transition: 0.4s ease;
  margin-top: 15px;
}
.card .info button:hover {
  background: red;
  color: white;
}
</style>