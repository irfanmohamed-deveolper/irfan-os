import Link from 'next/link'
import Head from 'next/head'
import { siteConfig } from '../../lib/siteConfig'

const demoProjects = [
  {slug:'edupilot', title:'EduPilot', category:'AI', status:'EXPERIMENTAL', description:'AI tutoring assistant — demo.'},
  {slug:'jarvis-x', title:'Jarvis X', category:'AUTOMATION', status:'RESEARCH', description:'Personal assistant experiments.'}
]

export default function Projects(){
  return (
    <>
      <Head><title>Projects — {siteConfig.name}</title></Head>
      <h1 className="text-3xl font-bold mb-4">Project Lab</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {demoProjects.map(p=> (
          <div key={p.slug} className="glass p-4 rounded">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold"><Link href={`/projects/${p.slug}`}>{p.title}</Link></h3>
                <div className="text-sm text-slate-400">{p.category} • {p.status}</div>
              </div>
            </div>
            <p className="mt-2 text-slate-300">{p.description}</p>
            <div className="mt-3 flex gap-2">
              <Link href={`/projects/${p.slug}`} className="px-3 py-1 border rounded">Details</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
