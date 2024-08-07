import React from 'react'

const Pagination = ({handlePrev, handleNext, pageNo}) => {
    return (
        <div className="bg-gray-400 m-8 p-4 rounded-lg flex justify-center">
            <div onClick={handlePrev} className="hover: cursor-pointer">
                <i className="fa-solid fa-arrow-left text-4xl pr-4"></i>
            </div>
            <div className="text-4xl font-bold pr-4">{pageNo}</div>
            <div onClick={handleNext} className="hover: cursor-pointer">
                <i className="fa-solid fa-arrow-right text-4xl"></i>
            </div>
        </div>
    )
}

export default Pagination
