import * as Tabs from '@radix-ui/react-tabs'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    features: ['Up to 500 payments/mo', 'Basic fraud tools', 'Email support'],
  },
  {
    name: 'Growth',
    price: '$49/mo',
    features: ['Up to 5k payments/mo', 'Advanced risk rules', 'Priority support'],
  },
  {
    name: 'Scale',
    price: 'Custom',
    features: ['Unlimited volume', 'Dedicated CSM', 'Enterprise SLA'],
  },
]

const items = [
  { category: 'Cards', items: [
    { name: 'Visa', fee: '2.9% + 30¢' },
    { name: 'Mastercard', fee: '2.9% + 30¢' },
    { name: 'Amex', fee: '3.4% + 30¢' },
  ]},
  { category: 'Wallets', items: [
    { name: 'Apple Pay', fee: '2.9% + 30¢' },
    { name: 'Google Pay', fee: '2.9% + 30¢' },
  ]},
  { category: 'Bank', items: [
    { name: 'ACH', fee: '0.8% (cap $5)' },
    { name: 'SEPA', fee: '1.2% + €0.25' },
  ]},
]

export default function TabbedPricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-white text-3xl font-semibold tracking-tight">Simple, transparent pricing</h2>
          <p className="text-blue-100/80 mt-2">Choose a plan or browse itemized rates by method.</p>
        </div>

        <Tabs.Root defaultValue="plans" className="w-full">
          <Tabs.List className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 p-1">
            <Tabs.Trigger value="plans" className="data-[state=active]:bg-white data-[state=active]:text-slate-900 text-white/80 px-4 py-2 rounded-lg transition">
              Plans
            </Tabs.Trigger>
            <Tabs.Trigger value="items" className="data-[state=active]:bg-white data-[state=active]:text-slate-900 text-white/80 px-4 py-2 rounded-lg transition">
              Itemized
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="plans" className="mt-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {plans.map((p) => (
                <div key={p.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-white text-xl font-semibold">{p.name}</h3>
                    <div className="text-white text-2xl font-bold">{p.price}</div>
                  </div>
                  <ul className="mt-5 space-y-3 text-blue-100/80">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-blue-50 transition">Select</button>
                </div>
              ))}
            </div>
          </Tabs.Content>

          <Tabs.Content value="items" className="mt-6">
            <div className="rounded-2xl border border-white/10 overflow-hidden">
              {items.map((group, gi) => (
                <div key={group.category} className={`${gi !== 0 ? 'border-t border-white/10' : ''} bg-white/[0.02]`}>
                  <div className="px-6 py-3 text-white/90 font-medium bg-white/[0.03]">{group.category}</div>
                  <div className="divide-y divide-white/10">
                    {group.items.map((it) => (
                      <div key={it.name} className="flex items-center justify-between px-6 py-4">
                        <div className="text-white/90">{it.name}</div>
                        <div className="text-blue-100/90">{it.fee}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </section>
  )
}
