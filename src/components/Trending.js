import { useEffect, useState } from 'react'
import giphy from '../services/giphy'
import Category from './Category'

const Trending = () => {
  const [trends, setTrends] = useState([])
  useEffect(() => {
    giphy.getTrendingGifs().then(setTrends)
  }, [])
  return <Category name="Tendencias" options={trends} />
}

export default Trending
