import React from 'react'

const Banner = () => {
  return (
    <div className="h-[20vh] md:h-[70vh] bg-cover bg-center flex items-end" 
    style={{backgroundImage: `url(https://wallpapers.com/images/featured/avengers-vm16xv4a69smdauy.jpg)`}}>
      <div className="text-orange-500 text-3xl font-extrabold text-center w-full h-[7vh] bg-gray-500 items-center">
        Avengers
      </div>
    </div>
  )
}

export default Banner
