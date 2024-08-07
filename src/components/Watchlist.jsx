import React, { useEffect, useState } from 'react'
import { genres } from '../genres';

const Watchlist = ({ watchList, setWatchList, handleRemoveFromWatchList }) => {
  //const [favList, setFavList] = useState(watchList);
  const [inputVal, setInputVal] = useState('');
  const [genresList, setGenreList] = useState(['All Genres']);
  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const handleSelect = (genre) => {
    setSelectedGenre(genre);
  }
  const handleSearch = (e) => {
    setInputVal(e.target.value);
  }

  useEffect(() => {
    let temp = watchList?.map((movie) => {
      return genres[movie.genre_ids[0]];
    })
    temp = new Set(temp);
    setGenreList(['All Genres', ...temp]);
    console.log(genresList);
  }, [watchList]);

  const sortIncreasing = () => {
    let sortedList = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average
    })
    setWatchList([...sortedList]);
    localStorage.setItem('moviesApp', JSON.stringify(watchList));
  }
  const sortDecreasing = () => {
    let sortedList = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average
    })
    setWatchList([...sortedList]);
    localStorage.setItem('moviesApp', JSON.stringify(watchList));
  }
  return (
    <>
      <div className="flex justify-center flex-wrap gap-10 pt-5 text-2xl">
        {
          genresList.map((genre) => {
            return (<div onClick={() => handleSelect(genre)} key={genre} className={selectedGenre == genre ? "hover:cursor-pointer hover:scale-110 duration-300 rounded-lg h-[60px] w-[150px] bg-blue-400 text-white text-center pt-3" :"hover:cursor-pointer hover:scale-110 duration-300 rounded-lg h-[60px] w-[150px] bg-gray-400 text-white text-center pt-3"}>{genre}</div>)
          })
        }
      </div>
      <div className="flex justify-center my-4">
        <input onChange={handleSearch} value={inputVal} type="text" className="h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none" placeholder="Search for Movies" />
      </div>
      <div className="rounded-lg overflow-hidden border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center text-2xl">
          <thead className="border-b-2">
            <tr className="h-[50px]">
              <th>Name</th>
              <th className='flex flex-row justify-center'>
                <div onClick={sortIncreasing}><i className="hover:cursor-pointer hover:scale-110 duration-300 fa-solid fa-arrow-up text-2xl pr-4 pt-2"></i></div>
                <div>Ratings</div>
                <div onClick={sortDecreasing}><i className="hover:cursor-pointer hover:scale-110 duration-300 fa-solid fa-arrow-down text-2xl pl-4 pr-4 pt-2"></i></div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {
              // eslint-disable-next-line react/prop-types
              watchList.filter((movie) => {
                if (selectedGenre == 'All Genres') {
                  return watchList;
                } else {
                  return genres[movie.genre_ids[0]] == selectedGenre
                }
              })
                .filter((movie) => {
                  return movie.original_title.toLowerCase().includes(inputVal.toLowerCase())
                }).map((item) => {
                  return (
                    <tr key={item.id} className="border-b-2">
                      <td className="flex items-center px-6 py-4"><img className="h-[10rem] w-[15rem]"
                        src={`https://image.tmdb.org/t/p/original${item.poster_path}`} />
                        <div className="px-20">{item.original_title}</div>
                      </td>
                      <td>{item.vote_average}</td>
                      <td>{item.popularity}</td>
                      <td>{genres[item.genre_ids[0]]}</td>
                      <td onClick={() => handleRemoveFromWatchList(item)} className="text-red-500 hover:cursor-pointer hover:scale-110 duration-300">Delete</td>
                    </tr>
                  )
                })
            }
          </tbody>
        </table>
      </div>
    </>

  )
}

export default Watchlist
