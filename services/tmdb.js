// import config from './config.json'

// const BASE_URL = config.TMDB_API_URL

// const instance = async (params) => {
//   return await fetch(`${BASE_URL}/${params}`)
//     .then(res => res.json)
//     .then(res => res)
// }

// export const getTrending = (mediaType, timeWindow) => {
//     instance
// }

export const getTrendingMovies = async () => {
  const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=2e4a1af1b40ef7964669ca2d04e5b434').then(res => res.json())
  //   const data = await response.json()
  return response
}

export const getTrendingTvShows = async () => {
  const response = await fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=2e4a1af1b40ef7964669ca2d04e5b434').then(res => res.json())
  //   const data = await response.json()
  return response
}
