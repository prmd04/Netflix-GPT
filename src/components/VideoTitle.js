import React from 'react'


const VideoTitle = ({title,overview}) => {
  
  return (
    <div className='w-screen aspect-video text-white pt-[20%] px-24 absolute bg-gradient-to-r from-black '>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='w-1/4 text-lg py-6'>{overview}</p>
      <div>
      <button className='p-2 pl-8 w-36 pr-8 text-lg bg-white text-black rounded-md hover:bg-opacity-80'>
      <span className='text-xl'>&#x23F5;</span>Play</button>
      <button className=' ml-2 p-2 pl-8 w-36 pr-8 text-lg bg-white text-black rounded-md'>&#128712; info</button>
      </div>
    </div>
  )
}

export default VideoTitle