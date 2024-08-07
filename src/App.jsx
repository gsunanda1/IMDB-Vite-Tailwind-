import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Movies from './components/Movies'
import Navbar from './components/Navbar'
import Watchlist from './components/Watchlist'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  const [watchList, setWatchList] = useState([]);
  
  let handleAddToWatchList = (movieObj)=>{
    setWatchList((prevObj)=>{
      return [...prevObj, movieObj]
    })
    localStorage.setItem('moviesApp',JSON.stringify(watchList));
    console.log(watchList)
  }
  let handleRemoveFromWatchList = (movieObj)=>{
    const newWatchList = watchList.filter((list)=> list.id != movieObj.id);
    setWatchList(newWatchList);
    localStorage.setItem('moviesApp',JSON.stringify(watchList));
  }

  // on page load, get movies from local storage if any

  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp');
    if(!moviesFromLocalStorage){
      return;
    }
    else{
      setWatchList(JSON.parse(moviesFromLocalStorage));
    }
  },[])
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Banner /><Movies watchList={watchList} 
          handleAddToWatchList={handleAddToWatchList} 
          handleRemoveFromWatchList={handleRemoveFromWatchList}/></>}></Route>
          <Route path="/watchlist" element={<Watchlist watchList={watchList} setWatchList={setWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
