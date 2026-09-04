import Head from 'next/head'
import { siteConfig } from '../lib/siteConfig'

export default function Lab(){
  return (
    <>
      <Head><title>Lab — {siteConfig.name}</title></Head>
      <h1 className="text-3xl font-bold">IRFAN LAB</h1>
      <p className="mt-2">Experimental tools and small utilities.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="glass p-4 rounded">AI Text Lab (demo)</div>
        <div className="glass p-4 rounded">Color Generator</div>
        <div className="glass p-4 rounded">Password Strength Demo</div>
        <div className="glass p-4 rounded">Markdown Editor</div>
      </div>
    </>
  )
}
