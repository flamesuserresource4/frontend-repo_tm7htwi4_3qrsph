import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Carousel from './components/Carousel'
import TabbedPricing from './components/TabbedPricing'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Carousel />
      <TabbedPricing />
      <footer className="border-t border-white/10 py-10 text-center text-blue-100/60">
        © {new Date().getFullYear()} @kelly's · Modern fintech for e‑commerce
      </footer>
    </div>
  )
}

export default App
