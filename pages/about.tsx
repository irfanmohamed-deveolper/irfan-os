import Head from 'next/head'
import { siteConfig } from '../lib/siteConfig'

export default function About(){
  return (
    <>
      <Head>
        <title>About — {siteConfig.name}</title>
      </Head>
      <h1 className="text-3xl font-bold">About Irfan</h1>
      <p className="mt-4">Short biography, current focus and areas of experimentation.</p>
      <section className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="glass p-4 rounded">How I Build</div>
        <div className="glass p-4 rounded">Current Focus</div>
        <div className="glass p-4 rounded">Future Vision</div>
      </section>
    </>
  )
}
