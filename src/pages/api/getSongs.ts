import { PrismaClient, Prisma } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'
import { SongType } from '../../utils/types'

const prisma = new PrismaClient()

const getSongs = async () => {
  const songs = await prisma.song.findMany()

  return songs
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {  
  try {
    const songs = await prisma.song.findMany()
    res.status(200).send(songs)
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}
