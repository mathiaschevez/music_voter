import React from 'react'
import { SongType } from '../utils/types'

const Song = ({ song } : {song: SongType}) => {

  return (
    <div className='bg-slate-500 w-1/2 h-60 p-3 rounded flex flex-col justify-between' key={song.id}>
      <div>
        <h1 className='text-white font-bold'>{song.title}</h1>
        <h1 className='text-slate-200'>{song.artist}</h1>
      </div>
      <div className='flex justify-between'>
        <div className='font-bold text-white'>
          <h1>Wins</h1>
          {song.wins}
        </div>
        <div className='font-bold text-white'>
          <h1>Losses</h1>
          {song.losses}
        </div>
      </div>
    </div>
  )
}

export default Song