import React from 'react'

// eslint-disable-next-line react/prop-types
const MovieCard = ({ movie, watchList, handleAddToWatchList, handleRemoveFromWatchList }) => {
  const doesContain = (movieObj) => {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movie.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div className="h-[40vh] w-[200px] gap-10 bg-cover p-4 rounded-xl hover:cursor-pointer 
    hover:scale-110 duration-300 flex flex-col justify-between items-end"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})` }}>
      {
        doesContain(movie) ? <div onClick={() => handleRemoveFromWatchList(movie)} className="pt-2 py-2 px-4 flex justify-center items-center text-xl
        bg-black rounded-lg h-[2rem] w-[40px]">
        &#10060;
      </div> : <div onClick={() => handleAddToWatchList(movie)} className="pt-2 py-2 px-4 flex justify-center items-center text-xl
          bg-black rounded-lg h-[2rem] w-[40px]">
          &#128525;
        </div>
      }


      <div className="text-white bg-gray-900/60 items-end text-2xl text-center w-full">{movie.original_title}</div>
    </div>
  )
}

export default MovieCard
