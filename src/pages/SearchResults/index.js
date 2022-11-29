import GifList from '../../components/GifList'
import useGifs from '../../hooks/useGifs'

const SearchResults = ({ params }) => {
  const { query } = params
  const { loading, gifs, setPage } = useGifs({ query })
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1)
  }

  return (
    <>
      {loading ? <p>spiner</p> : <GifList gifs={gifs}></GifList>}
      <button
        className="bg-red-200 border-gray-300 rounded-lg"
        onClick={handleNextPage}
      >
        Get next page
      </button>
    </>
  )
}
export default SearchResults
