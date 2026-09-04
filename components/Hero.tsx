import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <div className="text-sm text-cyan-300 mb-2">INITIALIZING IRFAN OS... SYSTEM READY</div>
        <h1 className="text-6xl font-extrabold leading-tight">MOHAMED<br/>IRFAN</h1>
        <p className="mt-4 text-slate-300 max-w-xl">Building intelligent digital experiences at the intersection of AI, software and creativity.</p>
        <div className="mt-6 flex gap-3">
          <a className="px-4 py-2 bg-cyan-500 text-black rounded-md" href="#projects">EXPLORE IRFAN OS</a>
          <a className="px-4 py-2 border border-white/10 rounded-md" href="/projects">VIEW PROJECTS</a>
          <a className="px-4 py-2 border border-white/10 rounded-md" href="/ai">ASK IRFAN AI</a>
        </div>
      </div>
      <div className="relative">
        <motion.div className="w-full h-64 glass rounded-xl flex items-center justify-center"
          animate={{ rotate: [0, 6, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity }}>
          <div className="w-28 h-28 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-xl"></div>
        </motion.div>
      </div>
    </section>
  )
}
