import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="relative z-10 w-full">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/30 flex items-center justify-center text-white font-bold">
            K
          </div>
          <span className="text-white text-lg font-semibold tracking-tight">@kelly's</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-blue-100/80 hover:text-white transition">Features</a>
          <a href="#carousel" className="text-blue-100/80 hover:text-white transition">Showcase</a>
          <a href="#pricing" className="text-blue-100/80 hover:text-white transition">Pricing</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex px-4 py-2 rounded-lg text-blue-100 hover:text-white transition">Sign in</button>
          <button className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-blue-50 transition shadow">Get Started</button>
          <button className="md:hidden p-2 rounded-lg border border-white/10 text-white/90"><Menu size={20} /></button>
        </div>
      </nav>
    </header>
  )
}
