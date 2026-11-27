import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import Icon from './Icons'
import { amenities } from '../../data/siteData'

export default function Amenities() {
  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30"></div>
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-brand-lime/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <SectionTitle
          eyebrow="Facilities"
          title="Everything Included in Your Stay"
          subtitle="From a live kitchen to a gym and lounge — every facility you need, already covered."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {amenities.map((a, i) => (
            <Reveal key={a.id} delay={(i % 6) * 70}>
              <div className="group relative h-full overflow-hidden flex flex-col items-center text-center gap-3 bg-white rounded-2xl border border-brand-creamDeep p-5 shadow-soft hover:shadow-card hover:-translate-y-1.5 hover:border-brand-green/40 transition-all duration-300">
                <span className="absolute inset-0 bg-brand-gradient origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></span>
                <span className="absolute top-0 -left-2/3 w-1/2 h-full -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:left-[130%] transition-all duration-700 ease-out"></span>

                <div className="relative w-14 h-14 rounded-2xl bg-brand-creamDeep group-hover:bg-white text-brand-greenDark flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  <Icon name={a.id} className="w-6 h-6" />
                </div>

                <span className="relative font-heading font-semibold text-sm text-brand-dark group-hover:text-white leading-snug transition-colors duration-300">
                  {a.label}
                </span>

                <span className="relative block h-0.5 w-0 group-hover:w-8 bg-white/70 rounded-full transition-all duration-300"></span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 text-center">
            <span className="inline-flex items-center gap-2 bg-white border border-brand-creamDeep text-brand-greenDark font-heading font-semibold text-sm px-5 py-2.5 rounded-full shadow-soft">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse"></span>
              And many more — ask us on WhatsApp
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}