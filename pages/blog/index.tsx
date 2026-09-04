import Head from 'next/head'
import { siteConfig } from '../../lib/siteConfig'

const demoPosts = [
  {slug:'intro-irfan-os', title:'Welcome to IRFAN OS', excerpt:'Introducing the personal OS concept.'}
]

export default function Blog(){
  return (
    <>
      <Head><title>Blog — {siteConfig.name}</title></Head>
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {demoPosts.map(p=> (
          <article key={p.slug} className="glass p-4 rounded">
            <h3 className="text-xl font-semibold"><a href={`/blog/${p.slug}`}>{p.title}</a></h3>
            <p className="mt-2 text-slate-300">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </>
  )
}
