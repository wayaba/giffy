import { useContext, useEffect, useState } from 'react'
import giphy from '../services/giphy'
import GifsContext from '../context/GifsContext'

const useGifs = ({ query } = { query: null }) => {
  const { gifs, setGifs } = useContext(GifsContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const queryToUse = query || localStorage.getItem('lastQuery') || 'hola'

    giphy.getGifs({ query: queryToUse }).then((gifs) => {
      setGifs(gifs)
      setLoading(false)
      localStorage.setItem('lastQuery', query)
    })
  }, [query, setGifs])

  return { loading, gifs }
}

export default useGifs
