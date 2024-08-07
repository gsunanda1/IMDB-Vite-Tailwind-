import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex border items-center space-x-8 pl-3 py-4 bg-slate-300">
      <img className="w-[80px] rounded-full" src="./Movie Logo.jpg" alt="Movie List"/>
      <Link className="text-blue-500 font-bold text-3xl" to="/">Home</Link>
      <Link className="text-blue-500 font-bold text-3xl" to="/watchlist">Watchlist</Link>
    </div>
  )
}

export default Navbar
