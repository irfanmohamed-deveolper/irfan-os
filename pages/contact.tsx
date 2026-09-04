import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({ name:z.string().min(1), email:z.string().email(), message:z.string().min(5) })

export default function Contact(){
  const { register, handleSubmit, formState:{errors} } = useForm({ resolver: zodResolver(schema) as any })
  const onSubmit = async (data:any)=>{
    await fetch('/api/contact',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(data)})
    alert('Submitted (demo)')
  }
  return (
    <>
      <Head><title>Contact</title></Head>
      <h1 className="text-3xl font-bold">Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 max-w-xl space-y-3">
        <input placeholder="Name" className="w-full p-2 bg-transparent border rounded" {...register('name')} />
        <input placeholder="Email" className="w-full p-2 bg-transparent border rounded" {...register('email')} />
        <textarea placeholder="Message" className="w-full p-2 bg-transparent border rounded" {...register('message')} />
        <button className="px-4 py-2 bg-cyan-400 text-black rounded">Send</button>
      </form>
    </>
  )
}
