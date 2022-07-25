<template>
  <div id="app">
    <SitesHeader/>
    <MovieList/>
    <router-view/>
  </div>
</template>

<script>
import MovieList from '@/components/MovieList.vue'
import SitesHeader from '@/components/SitesHeader.vue'
export default {
  components:{
    MovieList,
    SitesHeader
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>
