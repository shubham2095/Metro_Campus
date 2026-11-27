import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { features } from '../../data/siteData'
import Icon from './Icons'

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* soft background accents */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-brand-green/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-brand-green/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <SectionTitle
          eyebrow="Why Choose Metro Campus Living"
          title="Everything You Need for a Comfortable Stay"
          subtitle="We provide premium facilities at affordable prices so you can focus on what matters most."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 80}>
              <div className="group relative bg-white p-7 rounded-3xl border border-gray-100 shadow-soft hover:shadow-card hover:-translate-y-2 transition-all duration-300 h-full overflow-hidden">
                {/* gradient wash that fades in on hover */}
                <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500"></div>

                {/* expanding corner circle */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-green/5 rounded-full group-hover:scale-[2] transition-transform duration-500"></div>

                {/* faded index number */}
                <span className="absolute bottom-3 right-5 text-5xl font-heading font-extrabold text-gray-50 group-hover:text-brand-creamDeep transition-colors duration-300 select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="relative">
                  {/* icon tile */}
                  <div className="w-14 h-14 rounded-2xl bg-brand-gradient text-white flex items-center justify-center mb-5 shadow-glow group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                    <Icon name={f.icon} className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-semibold text-lg text-brand-dark mb-2 group-hover:text-brand-green transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>

                  {/* hover reveal underline */}
                  <span className="block h-0.5 w-0 group-hover:w-10 bg-brand-gradient rounded-full mt-4 transition-all duration-300"></span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}