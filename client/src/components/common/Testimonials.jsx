import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import Icon from './Icons'
import { testimonials } from '../../data/siteData'

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-brand-cream to-white relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40"></div>
      {/* soft glow accents */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-brand-green/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <SectionTitle
          eyebrow="Happy Residents"
          title="What Our Residents Say"
          subtitle="Real reviews from people who live and love Metro Campus Living."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={(i % 3) * 100}>
              <div className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-soft hover:shadow-card hover:-translate-y-2 transition-all duration-300 h-full overflow-hidden">
                {/* gradient top accent that grows on hover */}
                <span className="absolute top-0 left-0 h-1.5 w-0 group-hover:w-full bg-brand-gradient transition-all duration-500 rounded-r-full"></span>

                {/* big decorative quote */}
                <div className="absolute top-4 right-6 text-7xl leading-none text-brand-green/10 font-serif group-hover:text-brand-green/20 group-hover:scale-110 transition-all duration-300 select-none">
                  "
                </div>

                {/* animated stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Icon
                      key={s}
                      name="star"
                      fill="currentColor"
                      className="w-4 h-4 text-brand-lime transition-transform duration-300 group-hover:scale-110"
                      style={{ transitionDelay: `${s * 40}ms` }}
                    />
                  ))}
                </div>

                <p className="text-gray-600 italic leading-relaxed mb-6 relative z-10">"{t.text}"</p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-brand-gradient text-white flex items-center justify-center font-bold text-lg shadow-glow group-hover:scale-110 transition-transform duration-300">
                      {t.initial}
                    </div>
                    {/* verified check badge */}
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-brand-green text-white flex items-center justify-center ring-2 ring-white">
                      <Icon name="check" className="w-3 h-3" strokeWidth={3} />
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}