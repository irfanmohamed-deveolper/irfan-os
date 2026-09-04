import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Search, Command, SunMoon } from 'lucide-react'

export default function Navbar(){
  const [mobile, setMobile] = useState(false)
  return (
    <header className="glass sticky top-0 z-40 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl text-cyan-400">MI.</Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/projects">PROJECTS</Link>
          <Link href="/lab">LAB</Link>
          <Link href="/ai">AI</Link>
          <Link href="/blog">BLOG</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>
        <div className="flex items-center gap-3">
          <button aria-label="search" className="p-2 rounded-md hover:bg-white/5"><Search /></button>
          <button aria-label="command" className="p-2 rounded-md hover:bg-white/5"><Command /></button>
          <button aria-label="theme" className="p-2 rounded-md hover:bg-white/5"><SunMoon /></button>
          <button className="md:hidden" onClick={()=>setMobile(!mobile)}>Menu</button>
        </div>
      </div>
      {mobile && (
        <div className="md:hidden bg-[rgba(0,0,0,0.6)]">
          <div className="p-4 flex flex-col gap-3">
            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/projects">PROJECTS</Link>
            <Link href="/lab">LAB</Link>
          </div>
        </div>
      )}
    </header>
  )
}
