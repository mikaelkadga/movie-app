<template>
  <div class="tv-list">
    <h1 class="listing-title">
      this week' trending tv shows
    </h1>

    <div>
      <div class="row d-flex justify-content-center">
        <div
          v-for="(item, index)
            in items.results"
          :key="index"
          class="card col-3 mx-3 my-3"
          style="width: 22rem;"
        >
          <img :src="`https://image.tmdb.org/t/p/w500/${item.poster_path}`" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">
              Card title
            </h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a href="#" class="btn btn-dark">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TvList',
  props: {
    items: {
      type: Object,
      default () {
        return {
          results: []
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// .movie-list {
//   margin: 5rem 10rem;
// }

.listing-title {
    margin-bottom: 2rem;
}

.card {
  border: none;
}

.card-text {
    margin-bottom: 1.5rem;
}
</style>
