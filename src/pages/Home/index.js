import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import GifList from '../../components/GifList'
import useGifs from '../../hooks/useGifs'

const Home = () => {
  const POPULAR_GIFS = ['Batman', 'Superman', 'Aquaman', 'Robin']
  const [query, setQuery] = useState()
  const { loading, gifs } = useGifs()
  // eslint-disable-next-line
  const [path, setLocation] = useLocation()

  const handlerSubmit = (e) => {
    e.preventDefault()
    setLocation(`search/${query}`)
  }
  const handlerChange = (e) => {
    setQuery(e.target.value)
  }
  return (
    <>
      <form onSubmit={handlerSubmit}>
        <input
          className="form-label inline-block mt-4 mb-6 text-gray-700 p-2 border border-solid border-gray-300"
          onChange={handlerChange}
          type="text"
          placeholder="Search a gif here..."
        ></input>
      </form>
      <div></div>
      <div className="h-2/5 min-h-screen">
        <h3 className="mb-4">Accesos directos</h3>
        {POPULAR_GIFS.map((item, index) => {
          return (
            <Link
              key={index}
              className="p-3 m-4 text-lg bg-slate-300 rounded-md shadow-lg hover:bg-slate-400 active:bg-slate-500"
              to={`/search/${item}`}
            >
              {item}
            </Link>
          )
        })}
        <h3 className="my-4">Última búsqueda</h3>

        {loading ? <p>spiner</p> : <GifList gifs={gifs}></GifList>}
      </div>
    </>
  )
}

export default Home
