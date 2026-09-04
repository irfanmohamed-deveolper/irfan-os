import { useState, useRef } from 'react'

type Message = { role: 'user'|'assistant', text: string }

export default function AIChat(){
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const ref = useRef<HTMLDivElement|null>(null)

  async function send(){
    if(!input) return
    const userMsg = { role: 'user' as const, text: input }
    setMessages(m=>[...m, userMsg])
    setInput('')
    setLoading(true)
    try{
      const res = await fetch('/api/chat', { method: 'POST', headers:{'content-type':'application/json'}, body: JSON.stringify({prompt: input}) })
      const data = await res.json()
      setMessages(m=>[...m, { role: 'assistant', text: data.answer || 'Demo response: assistant offline.' }])
    }catch(e){
      setMessages(m=>[...m, { role: 'assistant', text: 'Demo response: assistant offline.' }])
    }finally{ setLoading(false); ref.current?.scrollIntoView({behavior:'smooth'}) }
  }

  return (
    <div className="p-4 glass rounded-lg max-w-2xl">
      <div className="mb-3 font-semibold">ASK IRFAN</div>
      <div className="space-y-3 max-h-64 overflow-auto p-2">
        {messages.map((m,i)=>(
          <div key={i} className={`p-2 rounded ${m.role==='user'?'bg-white/5 self-end':'bg-white/3'}`}>{m.text}</div>
        ))}
        <div ref={ref} />
      </div>
      <div className="mt-3 flex gap-2">
        <input value={input} onChange={e=>setInput(e.target.value)} className="flex-1 p-2 rounded bg-transparent border border-white/6" placeholder="Ask about Irfan or the site" />
        <button onClick={send} className="px-4 py-2 bg-cyan-400 text-black rounded">
          {loading? '…' : 'Send'}
        </button>
      </div>
    </div>
  )
}
