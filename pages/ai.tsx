import dynamic from 'next/dynamic'
import Head from 'next/head'
import { siteConfig } from '../lib/siteConfig'

const AIChat = dynamic(()=>import('../components/AIChat'), { ssr:false })

export default function AI(){
  return (
    <>
      <Head><title>AI — {siteConfig.name}</title></Head>
      <h1 className="text-3xl font-bold">Ask Irfan</h1>
      <p className="mt-2">The assistant answers only from the site knowledge base. Demo mode enabled if API not configured.</p>
      <div className="mt-6"><AIChat /></div>
    </>
  )
}
