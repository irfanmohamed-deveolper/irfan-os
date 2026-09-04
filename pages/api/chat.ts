import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method !== 'POST') return res.status(405).end()
  const { prompt } = req.body || {}
  // Demo adapter: if OPENAI_API_KEY present, forward (server-side) else respond with safe demo answer
  if(process.env.OPENAI_API_KEY){
    try{
      const r = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type':'application/json', 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` },
        body: JSON.stringify({ model: 'gpt-4o-mini', messages:[{role:'user',content:prompt}], max_tokens:500 })
      })
      const data = await r.json()
      const answer = data?.choices?.[0]?.message?.content || 'No answer.'
      return res.status(200).json({ answer })
    }catch(e){ console.error(e); }
  }
  // Demo mode: reply from local knowledge base
  const kb: Record<string,string> = {
    'what is irfan os': 'IRFAN OS is Mohamed Irfan\'s personal digital headquarters — a portfolio, AI assistant and lab.',
    'what projects has irfan built': 'Projects listed on this site are demo entries; real projects are linked when provided.'
  }
  const key = String(prompt || '').toLowerCase().trim()
  const answer = kb[key] || 'I am running in demo mode. Ask about site contents or check documentation.'
  res.status(200).json({ answer })
}
