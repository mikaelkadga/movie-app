<template>
  <div class="nav">
    <div class="menu">
      <div :class="{classA: scrollPosition < 100, classB: scrollPosition > 100}" class="navMenu">
        <NuxtLink
          aria-label="Home"
          :to="{name: 'index'}"
          class="home"
        >
          <!-- eslint-disable-next-line -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round" ><path d="M8.5 23.2H1.3V9L12 .8 22.7 9v14.2h-7.2v-5c0-1.9-1.6-3.4-3.5-3.4s-3.5 1.5-3.5 3.4v5z"/></g></svg>
        </NuxtLink>
        <NuxtLink
          aria-label="Movie"
          :to="{name: 'movie'}"
          class="movie"
        >
          <!-- eslint-disable-next-line -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round"><path d="M3.2 12.8h19.6v9.5c0 .5-.4.9-1 .9H4.1c-.5 0-1-.4-1-.9v-9.5"/><path d="M3.3 13.1l-2-4.4c-.2-.5 0-1 .5-1.2L18 .8c.5-.2 1.1 0 1.3.5l1.8 4-17.5 7.3"/><path d="M15 2.1l-.9 6M8 4.7l-1.2 6.6"/></g></svg>

        </NuxtLink>
        <NuxtLink
          aria-label="TV"
          :to="{name: 'tv'}"
          class="tv"
        >
          <!-- eslint-disable-next-line -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-miterlimit="10"><path d="M21.4 23H2.6c-.9 0-1.6-.7-1.6-1.6V8.9c0-.9.7-1.6 1.6-1.6h18.9c.8 0 1.5.7 1.5 1.6v12.6c0 .8-.7 1.5-1.6 1.5zM6.4 1L12 7M17.6 1L12 7"/></g></svg>

        </NuxtLink>
        <!-- <NuxtLink
          aria-label="Search"
          :to="{name: 'index'}"
          class=""
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-miterlimit="10"><path d="M16.4 16.7l6.3 6.5" /><ellipse cx="10.5" cy="9.8" rx="9.2" ry="9.1" /></g></svg>
        </NuxtLink> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      scrollPosition: null
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY
    }
  }
}
</script>

<style lang="scss" scoped>
.navMenu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8%;
  position: fixed;
  z-index: 101;
  flex-direction: row;
  bottom: 0;
  width: 100vw;
  height: 8%;
  background-color: black;
  border-right: 1px solid rgb(102, 102, 102);
  @media (min-width: 800px) {
      width: 5rem;
      height: 100vh;
      flex-direction: column;
      }
  .home {
    cursor: pointer;
  }
  .movie {
    cursor: pointer;
  }
  .tv {
    cursor: pointer;
  }
}
</style>
