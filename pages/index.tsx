import Hero from '../components/Hero'
import AIChat from '../components/AIChat'
import { siteConfig } from '../lib/siteConfig'
import Head from 'next/head'

export default function Home(){
  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
      </Head>
      <Hero />
      <section className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-2 text-slate-300">Mohamed Irfan — AI Creator, Developer, Future Innovator. Building intelligent digital experiences blending AI and software design.</p>
        </div>
        <div>
          <AIChat />
        </div>
      </section>
    </>
  )
}
