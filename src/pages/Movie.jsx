import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Cart from '../components/UI/Cart'

function Movie() {
  const moviesData = useLoaderData()
  // console.log(moviesData)
  return (
    <div className='bg-gray-950 text-white min-h-screen w-full'>
      Movies
      <ul className=' flex items-center justify-center'>
        <div className='mt-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container'>
      {
        moviesData.Search.map((movie)=>{
          return <Cart key={movie.imdbID} movie={movie}/>
        })
      }

        </div>
    </ul>
    </div>
  )
}

export default Movie