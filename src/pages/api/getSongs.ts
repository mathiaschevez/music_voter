import { PrismaClient, Prisma } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'
import { Song } from '../../utils/types'

const prisma = new PrismaClient()

const getSongs = async () => {
  const songs = await prisma.song.findMany()

  return songs
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {  
  return new Promise(async () => {
    try {
      let songs = await prisma.song.findMany()
      res.status(200).json(songs)
      await prisma.$disconnect()
    } catch (error: any) {
      res.status(500).json({ error: error.message })
      await prisma.$disconnect()
    }
  }) 
}
