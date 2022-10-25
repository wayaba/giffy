import Gif from './Gif'

const GifList = ({ gifs }) => {
  return (
    <div className="grid grid-cols-5 mt-4">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} url={url} id={id} title={title} />
      ))}
    </div>
  )
}

export default GifList
