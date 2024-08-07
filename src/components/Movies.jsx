import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios';
import Pagination from './Pagination';
const Movies = ({watchList,handleAddToWatchList, handleRemoveFromWatchList}) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo]= useState(1);
  const handlePrev = ()=>{
    if(pageNo == 1){
      setPageNo(1);
    }
    else
    setPageNo(pageNo-1);
  }

  const handleNext = ()=>{
    setPageNo(pageNo+1);
  }
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5c93e50883a8d3e1f22539373243d7b3&language=en-US&page=${pageNo}`)
      .then((res) => {
        setMovies(res.data.results)
        console.log(movies);
      }
      )
  }, [pageNo])
  return (
    <div className="p-5">
      <div className="w-full text-center text-3xl font-extrabold p-6">Trending Movies</div>
      <div className='flex flex-row flex-wrap justify-around gap-6'>
        {
          movies?.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} watchList={watchList} handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>
          })
        }

      </div>
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
  )
}

export default Movies
