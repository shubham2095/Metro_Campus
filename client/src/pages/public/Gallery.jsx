import PageBanner from '../../components/common/PageBanner'
import SectionTitle from '../../components/common/SectionTitle'
import Reveal from '../../components/common/Reveal'
import CTABanner from '../../components/common/CTABanner'
import { galleryImages } from '../../data/siteData'

export default function Gallery() {
  return (
    <>
      <PageBanner
        title="Gallery"
        subtitle="Take a look at Metro Campus Living in Shakti Nagar, Delhi."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle eyebrow="Our Space" title="A Look Inside & Out" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <Reveal key={i} delay={(i % 3) * 100}>
                <div className="group relative overflow-hidden rounded-3xl shadow-soft cursor-pointer">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {img.alt}
                    </span>
                  </div>
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