import { Link } from 'wouter'
const Gif = ({ id, url, title }) => {
  return (
    <div
      className="  bg-orange-300 rounded-lg 
    border-2 border-black items-center m-4 p-4"
    >
      <Link to={`/detail/${id}`}>
        <h3 className="text-gray-500 font-bold">{title}</h3>
        <small className="text-gray-400 font-medium">{id}</small>
        <img className="rounded-2xl m-auto " src={url} alt={title} />
      </Link>
    </div>
  )
}

export default Gif
