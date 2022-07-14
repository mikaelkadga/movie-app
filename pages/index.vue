<template>
  <div class="container">
    <MovieList />
  </div>
</template>

<script>
import MovieList from '~/components/movies/MovieList.vue'
export default {
  name: 'IndexPage',
  components: { MovieList }
}
</script>

<style lang="scss" scoped>
.container {
    margin-top: 5rem;
}
</style>
