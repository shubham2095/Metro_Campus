import PageBanner from '../../components/common/PageBanner'
import SectionTitle from '../../components/common/SectionTitle'
import Reveal from '../../components/common/Reveal'
import Icon from '../../components/common/Icons'
import CTABanner from '../../components/common/CTABanner'
import { services } from '../../data/siteData'
import Amenities from '../../components/common/Amenities'

export default function Services() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="All our services are designed to give you a hassle-free living experience."
      />

      <section className="py-24 relative overflow-hidden">
        {/* soft background accents */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-green/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-green/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <SectionTitle
            eyebrow="What We Offer"
            title="Premium Services Included"
            subtitle="Everything below is included in your stay — no hidden charges, no surprises."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 100}>
                <div className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-soft hover:shadow-card hover:-translate-y-2 transition-all duration-300 h-full overflow-hidden">
                  {/* gradient glow that fades in on hover */}
                  <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"></div>

                  {/* big faded background number */}
                  <span className="absolute -top-4 -right-2 text-8xl font-heading font-extrabold text-gray-50 group-hover:text-brand-creamDeep transition-colors duration-300 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="relative">
                    {/* icon tile */}
                    <div className="w-20 h-20 rounded-3xl bg-brand-creamDeep text-brand-greenDark flex items-center justify-center mb-6 shadow-xs group-hover:bg-brand-gradient group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                      <Icon name={s.icon} className="w-9 h-9" />
                    </div>

                    <h3 className="font-heading font-semibold text-xl text-brand-dark mb-2 group-hover:text-brand-green transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-5">{s.desc}</p>

                    {/* included tag */}
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      <span className="w-4 h-4 rounded-full bg-green-500 text-white flex items-center justify-center">
                        <Icon name="check" className="w-2.5 h-2.5" strokeWidth={3} />
                      </span>
                      Included in Rent
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Amenities />

          {/* closing note */}
          <Reveal delay={150}>
            <div className="mt-14 text-center bg-gradient-to-r from-brand-cream to-white border border-brand-creamDeep rounded-3xl p-8 max-w-3xl mx-auto">
              <h3 className="font-heading font-bold text-xl text-brand-dark mb-2 flex items-center justify-center gap-2">
                <Icon name="party" className="w-5 h-5 text-brand-green" /> All This, One Simple Rent
              </h3>
              <p className="text-gray-500">
                No hidden costs. Meals, WiFi, security, power backup and maintenance — all bundled
                into your monthly rent so you can live worry-free.
              </p>
            </div>
            
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  )
}