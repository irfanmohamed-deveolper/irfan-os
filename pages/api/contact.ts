import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method !== 'POST') return res.status(405).end()
  // In production this would persist to DB or send email. Demo: log and ACK.
  console.log('Contact submission', req.body)
  res.status(200).json({ ok:true })
}
