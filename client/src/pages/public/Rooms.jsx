import PageBanner from '../../components/common/PageBanner'
import SectionTitle from '../../components/common/SectionTitle'
import RoomCard from '../../components/common/RoomCard'
import Reveal from '../../components/common/Reveal'
import CTABanner from '../../components/common/CTABanner'
import { rooms } from '../../data/siteData'

export default function Rooms() {
  return (
    <>
      <PageBanner
        title="Our Rooms"
        subtitle="Fully furnished, clean and equipped with modern amenities. Choose the room that fits you best."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            eyebrow="Room Options"
            title="Choose Your Perfect Room"
            subtitle="Comfortable single and double sharing options for students and working professionals."
          />
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {rooms.map((r, i) => (
              <Reveal key={r.id} delay={i * 120}><RoomCard room={r} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}