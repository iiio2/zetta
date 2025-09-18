// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(process.env.API_URL + '/posts/' + req.query.id)
  if (!response.ok) {
    throw new Error('Something went wrong')
  }
  const post = await response.json()
  res.status(200).json({ post })
}
