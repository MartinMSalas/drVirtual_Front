import React from 'react'

const Button = () => {
  return (
    <div className="relative  w-[90px] group">
      <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-[90px]  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
      <button className="relative transition-all duration-500 bg-blue-400 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-[90px] text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
        Button
      </button>
    </div>
  )
}

export default Button