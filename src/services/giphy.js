import { API_KEY, BASE_URL } from './settings'

const fromResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map((info) => {
      const { id, images, title } = info
      const { url } = images.downsized_medium
      return { id, title, url }
    })
    return gifs
  }

  return []
}

const getGifs = ({ limit = 10, query, page = 0 }) => {
  const apiURL = `${BASE_URL}/search?api_key=${API_KEY}&limit=${limit}&offset=${
    page * limit
  }&rating=g&lang=es&q=${query}`

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromResponseToGifs)
}

const getTrendingGifs = () => {
  return fetch(
    `${BASE_URL}/trending?api_key=${API_KEY}&limit=10&offset=0&rating=g&lang=es`
  )
    .then((res) => res.json())
    .then(fromResponseToGifs)
}

const giphy = { getGifs, getTrendingGifs }

export default giphy
