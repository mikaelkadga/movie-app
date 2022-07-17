<template>
  <div class="container-fluid">
    <TvList :items="trending" />
  </div>
</template>

<script>
import TvList from '~/components/tv/TvList.vue'
import { getTrendingTvShows } from '~/services/tmdb'
export default {
  components: { TvList },
  async asyncData ({ error }) {
    try {
      const trending = await getTrendingTvShows()
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
