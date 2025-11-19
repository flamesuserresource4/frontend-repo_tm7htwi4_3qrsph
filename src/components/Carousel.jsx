import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    title: 'Global Cards',
    desc: 'Accept Visa, Mastercard and 20+ local methods with one integration.',
  },
  {
    title: 'Risk & Compliance',
    desc: 'Built-in 3DS, velocity rules, and device fingerprinting reduce fraud.',
  },
  {
    title: 'Dashboard',
    desc: 'Real-time insights, payouts, and dispute management in one place.',
  },
]

export default function Carousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500)
    return () => clearInterval(t)
  }, [])

  const prev = () => setIndex((index - 1 + slides.length) % slides.length)
  const next = () => setIndex((index + 1) % slides.length)

  return (
    <section id="carousel" className="relative py-16 sm:py-24 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 sm:p-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-white text-2xl sm:text-3xl font-semibold">What you get</h2>
            <div className="flex gap-2">
              <button onClick={prev} className="p-2 rounded-lg border border-white/10 text-white/90 hover:bg-white/10">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} className="p-2 rounded-lg border border-white/10 text-white/90 hover:bg-white/10">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((s, i) => (
                <div key={i} className="min-w-full grid sm:grid-cols-2 gap-8">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 border border-white/10"></div>
                  <div>
                    <h3 className="text-white text-2xl font-semibold">{s.title}</h3>
                    <p className="mt-3 text-blue-100/80">{s.desc}</p>
                    <ul className="mt-6 space-y-3 text-blue-100/80">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        Fast integration with SDKs
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        PCI-DSS Level 1
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        99.99% uptime SLA
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition ${index === i ? 'bg-white' : 'bg-white/30'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
