import PageBanner from '../../components/common/PageBanner'
import SectionTitle from '../../components/common/SectionTitle'
import Reveal from '../../components/common/Reveal'
import CTABanner from '../../components/common/CTABanner'
import { features, stats, business } from '../../data/siteData'
import Icon from '../../components/common/Icons'

export default function About() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Get to know Metro Campus Living — your trusted PG for boys in the heart of Delhi."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card">
                <img src="/images/home/hero.jpg" alt="Metro Campus Living" className="w-full h-[26rem] object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-4 md:right-6 bg-white rounded-2xl shadow-card p-5 border border-gray-100">
                <div className="font-heading font-extrabold text-3xl text-gradient">10+</div>
                <div className="text-sm text-gray-500">Years of Trust</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div>
              <SectionTitle
                eyebrow="Who We Are"
                title="A Comfortable Home Near Your Campus"
                center={false}
              />
              <p className="text-gray-500 leading-relaxed mb-4">
                Metro Campus Living is a premium paying-guest accommodation for boys located at{' '}
                {business.address}. We are one of the most trusted PGs in North Delhi, offering a clean,
                secure and well-connected place to stay near Delhi University and metro connectivity.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                From air-conditioned rooms to nutritious home-cooked meals and round-the-clock security,
                everything is designed to make you feel right at home so you can focus on your studies
                and career.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="text-center bg-gray-50 rounded-2xl py-5">
                    <div className="font-heading font-extrabold text-3xl text-gradient">{s.value}</div>
                    <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-brand-cream to-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle eyebrow="Our Strengths" title="Why Residents Choose Us" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 80}>
                <div className="group bg-white p-7 rounded-3xl border border-gray-100 shadow-soft hover:shadow-card hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-brand-gradient text-white flex items-center justify-center mb-5 shadow-glow group-hover:scale-110 transition-transform">
                    <Icon name={f.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-brand-dark mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}