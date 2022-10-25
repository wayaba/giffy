import GifList from '../../components/GifList'
import useGifs from '../../hooks/useGifs'

const SearchResults = ({ params }) => {
  const { query } = params
  const { loading, gifs } = useGifs({ query })

  return <>{loading ? <p>spiner</p> : <GifList gifs={gifs}></GifList>}</>
}
export default SearchResults
