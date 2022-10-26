import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Song } from '../components'
import { SongType } from '../utils/types'

const Home: NextPage = () => {
  const [songs, setSongs] = useState<SongType[]>([])

  useEffect(() => {
    const fetchSongs = async () => {
      const res = await fetch('/api/getSongs', {
        method: 'POST'
      })
      const data = await res.json()
      setSongs(data)
    }

    fetchSongs()
  }, [])

  console.log(songs)

  return (
    <div className='h-full'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Vote for your favorite songs!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-wrap mt-6'>
        {songs.length > 0 && songs.map((s) => (
          <Song key={s.id} song={s}/>
        ))}
      </div>
    </div>
  )
}

export default Home
