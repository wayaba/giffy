const baseUrl = 'https://api.giphy.com/v1/gifs/search'
const api_key = 'IHUvzk5QRjDCepiwICoyVEvfUSGzw2py'

const getGifs = ({ query }) => {
  return fetch(
    baseUrl +
      `?api_key=${api_key}&limit=10&offset=0&rating=g&lang=es&q=${query}`
  )
    .then((res) => res.json())
    .then((response) => {
      const { data } = response
      const gifts = data.map((info) => {
        const { id, images, title } = info
        const { url } = images.downsized_medium
        return { id, title, url }
      })
      return gifts
    })
}

const giphy = { getGifs }

export default giphy
