import { useRouter } from 'next/router'
import Head from 'next/head'
import { siteConfig } from '../../lib/siteConfig'

const demo: Record<string,{title:string,content:string}> = { 'intro-irfan-os': { title:'Welcome to IRFAN OS', content:'This is a demo article.' } }

export default function Post(){
  const { query } = useRouter()
  const post = typeof query.slug === 'string' ? demo[query.slug] : null
  if(!post) return <div>Post not found</div>
  return (
    <>
      <Head><title>{post.title} — {siteConfig.name}</title></Head>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <article className="mt-4 prose prose-invert">{post.content}</article>
    </>
  )
}
