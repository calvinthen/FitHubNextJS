import React, { useEffect, useState } from 'react'
import Data from './../../shared/Data'

function GameList() {
    const [games,setGames]=useState();
    useEffect(()=>{
      setGames(Data.GameList);
    },
    []
  )
  return (
    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 mt-4'>
      {
        games.map((item)=>(
          <div className='flex flex-col items-center cursor-pointer'>
            <img src={item.image} width={55} height={55} className='hover:animate-bounce transition-all duration-150'/>
            <h2 className='text-[14px] text-center'> {item.name} </h2>
          </div>
        ))
      }
    </div>
  )
}

export default GameList
