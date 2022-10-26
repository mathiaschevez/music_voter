import type { NextApiRequest, NextApiResponse } from 'next'
import { Song } from '../../src/utils/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Song>
) {
  res.status(200).json({ id: 1, title: 'Hello', artist: 'Future, Kendrick Lamar', wins: 0, losses: 0 })
}
