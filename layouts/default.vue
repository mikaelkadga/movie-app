<template>
  <div class="app">
    <Header />
    <Nav />
    <div class="movieApp">
      <Nuxt keep-alive />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Nav from '~/components/global/Nav.vue'

export default {
  components: { Header, Nav }
}
</script>

<style lang="scss" scoped>
.movieApp {
  margin: 5rem 10rem;
}
</style>
