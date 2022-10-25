import Gif from '../../components/Gif'
import useGlobalGifs from '../../hooks/useGlobalGifs'

const Detail = ({ params }) => {
  const gifs = useGlobalGifs()
  const gif = gifs.find((g) => g.id === params.id)
  console.log(gif)
  return <Gif {...gif} />
}

export default Detail
