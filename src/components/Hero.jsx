import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur text-white/90 text-xs mb-5">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Fintech for modern commerce
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
            Seamless payments for ambitious brands
          </h1>
          <p className="mt-4 text-blue-50/90 text-lg max-w-xl">
            @kelly's helps you accept cards globally, reduce fraud, and grow faster with a minimalist, secure checkout experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow hover:bg-blue-50 transition">Start free trial</button>
            <button className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white shadow hover:bg-white/15 transition">Book a demo</button>
          </div>
          <p className="mt-3 text-blue-100/70 text-sm">No credit card required · 14-day free trial</p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950"></div>
    </section>
  )
}
