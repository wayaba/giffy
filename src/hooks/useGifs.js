import { useContext, useEffect, useState } from 'react'
import giphy from '../services/giphy'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0

const useGifs = ({ query } = { query: null }) => {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  const [page, setPage] = useState(INITIAL_PAGE)
  const { gifs, setGifs } = useContext(GifsContext)

  // recuperamos la keyword del localStorage
  const queryToUse = query || localStorage.getItem('lastQuery') || 'hola'

  useEffect(() => {
    setLoading(true)

    giphy.getGifs({ query: queryToUse }).then((gifs) => {
      setGifs(gifs)
      setLoading(false)
      localStorage.setItem('lastQuery', query)
    })
  }, [query, setGifs, queryToUse])

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    setLoadingNextPage(true)
    giphy.getGifs({ query: queryToUse, page }).then((gifs) => {
      setGifs((prevGifs) => prevGifs.concat(gifs))
      setLoadingNextPage(false)
    })
  }, [queryToUse, page, setGifs])

  return { loading, loadingNextPage, gifs, setPage }
}

export default useGifs
