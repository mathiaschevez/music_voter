import { PrismaClient, Prisma } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {  
  if(req.method === 'POST') {
    try {
      const songs = await prisma.song.findMany()
      res.status(200).send(songs)
    } catch (err) {
      res.status(500).send({ error: err + 'failed to fetch data' })
    }
  }
}
