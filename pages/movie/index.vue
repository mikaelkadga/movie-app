<template>
  <div class="container-fluid">
    <MovieList :items="trending" />
  </div>
</template>

<script>
import MovieList from '~/components/movie/MovieList.vue'
import { getTrendingMovies } from '~/services/tmdb'
export default {
  components: { MovieList },
  async asyncData ({ error }) {
    try {
      const trending = await getTrendingMovies()
      return { trending }
    } catch {
      error({ statusCode: 504, message: 'Data not available' })
    }
  },
  data () {
    return {

    }
  },
  method: {

  }
}
</script>

<style>

</style>
