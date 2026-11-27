import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import Icon from './Icons'
import { nearby, business } from '../../data/siteData'

export default function Nearby() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-brand-cream">
      {/* subtle dot background */}
      <div className="absolute inset-0 dot-grid opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <SectionTitle
          eyebrow="Prime Location"
          title="Close to DU & North Campus"
          subtitle="Located in Shakti Nagar — just minutes from Delhi University colleges, metro and markets."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: nearby list */}
          <div className="grid sm:grid-cols-2 gap-4">
            {nearby.map((n, i) => (
              <Reveal key={n.name} delay={(i % 2) * 80}>
                <div className="group relative flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 h-full overflow-hidden">
                  {/* accent bar on hover */}
                  <span className="absolute left-0 top-0 h-full w-1 bg-brand-gradient scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></span>

                  <div className="w-12 h-12 shrink-0 rounded-xl bg-brand-creamDeep text-brand-greenDark flex items-center justify-center group-hover:bg-brand-gradient group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Icon name={n.icon} className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-semibold text-brand-dark leading-tight truncate">{n.name}</h3>
                    <span className="inline-flex items-center gap-1 mt-1 text-xs font-medium text-brand-green bg-brand-creamDeep px-2 py-0.5 rounded-full">
                      <Icon name="location" className="w-3 h-3" /> {n.distance}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right: map */}
          <Reveal delay={150}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card border border-gray-100">
                <iframe
                  title="Metro Campus Living — Location near DU North Campus"
                  src={business.mapEmbed}
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* floating address card */}
              <div className="absolute -bottom-5 left-5 right-5 sm:right-auto sm:max-w-xs bg-white rounded-2xl shadow-card p-4 border border-gray-100 flex items-start gap-3">
                <Icon name="location" className="w-5 h-5 shrink-0 mt-0.5 text-brand-green" />
                <div>
                  <p className="font-semibold text-brand-dark text-sm">We are here</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{business.address}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* bottom highlight strip */}
        <Reveal delay={100}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: 'college', label: 'DU Colleges', value: 'Minutes Away' },
              { icon: 'metro', label: 'Metro Station', value: 'Nearby' },
              { icon: 'market', label: 'Markets & Food', value: 'Walking Distance' },
              { icon: 'hospital', label: 'Hospitals', value: 'Close By' },
            ].map((s) => (
              <div key={s.label} className="text-center bg-white rounded-2xl border border-gray-100 shadow-soft py-6 px-3 hover:shadow-card transition-shadow">
                <div className="flex justify-center mb-2"><Icon name={s.icon} className="w-8 h-8 text-brand-green" /></div>
                <div className="font-heading font-bold text-brand-dark">{s.value}</div>
                <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}