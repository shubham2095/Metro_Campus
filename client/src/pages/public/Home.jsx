import Hero from '../../components/common/Hero'
import Features from '../../components/common/Features'
import Amenities from '../../components/common/Amenities'
import Nearby from '../../components/common/Nearby'
import SectionTitle from '../../components/common/SectionTitle'
import RoomCard from '../../components/common/RoomCard'
import Reveal from '../../components/common/Reveal'
import Icon from '../../components/common/Icons'
import { rooms, services } from '../../data/siteData'
import Testimonials from '../../components/common/Testimonials'
import CTABanner from '../../components/common/CTABanner'
import { Link } from 'react-router'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />

      <Amenities />
      
      {/* Rooms preview */}
      <section className="py-24 bg-gradient-to-b from-brand-cream to-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            eyebrow="Our Rooms"
            title="Choose Your Perfect Room"
            subtitle="All rooms are fully furnished, clean and equipped with modern amenities."
          />
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {rooms.map((r, i) => (
              <Reveal key={r.id} delay={i * 120}><RoomCard room={r} /></Reveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/rooms" className="btn-ghost">View All Rooms <Icon name="arrow" className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      <Nearby />

      {/* Services preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            eyebrow="What We Offer"
            title="Premium Services Included"
            subtitle="All our services are designed to give you a hassle-free living experience."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 100}>
                <div className="group flex gap-4 bg-white p-7 rounded-3xl border border-gray-100 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-creamDeep text-brand-greenDark flex items-center justify-center group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-300">
                    <Icon name={s.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-brand-dark mb-1">{s.title}</h3>
                    <p className="text-gray-500 text-sm">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTABanner />
    </>
  )
}