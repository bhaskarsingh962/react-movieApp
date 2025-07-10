import React from 'react'

function Loading() {
  return (
    <div className="h-screen flex justify-center items-center w-40 ">
      <div className="absolute w-10 h-10 bg-white left-1/2 top-1/2 animate-[rotate_1s_ease-in_infinite]" />
      <div className="absolute w-5 h-5 bg-[#FF3D00] left-1/2 top-1/2 animate-[rotate_1s_ease-in_infinite,_moveY_1s_ease-in_infinite]" />
    </div>
  )
}

export default Loading
