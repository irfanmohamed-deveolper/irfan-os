import { useRouter } from 'next/router'
import Head from 'next/head'
import { siteConfig } from '../../lib/siteConfig'

const demo: Record<string,any> = {
  edupilot: {
    title:'EduPilot',
    overview:'An AI tutoring assistant prototype. Demo content only.'
  },
  'jarvis-x':{
    title:'Jarvis X',
    overview:'Personal automation experiments.'
  }
}

export default function ProjectPage(){
  const { query } = useRouter()
  const p = typeof query.slug === 'string' ? demo[query.slug] : null
  if(!p) return <div>Project not found</div>
  return (
    <>
      <Head><title>{p.title} — {siteConfig.name}</title></Head>
      <h1 className="text-3xl font-bold">{p.title}</h1>
      <p className="mt-3">{p.overview}</p>
      <section className="mt-6 glass p-4 rounded">
        <h3 className="font-semibold">Overview</h3>
        <p className="mt-2 text-slate-300">{p.overview}</p>
      </section>
    </>
  )
}
