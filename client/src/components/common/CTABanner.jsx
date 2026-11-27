import Icon from './Icons'
import { waLink } from '../../data/siteData'

export default function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden bg-dark-gradient">
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-brand-green/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-green/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
          <Icon name="flame" className="w-4 h-4 text-brand-lime" /> Limited Rooms Available
        </span>
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl mb-5 leading-tight md:leading-none">
          Ready to Move In?<br />Book Your Room <span className="text-gradient-light">Today!</span>
        </h2>
        <p className="text-white/70 mb-9 max-w-2xl mx-auto text-lg">
          Don't miss out! Contact us on WhatsApp right now to check availability and get the best price.
        </p>
        <a
          href={waLink('Hi! I want to Book a Room at Metro Campus Living. Please share current availability and pricing.')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-brand-greenDark px-9 py-4 rounded-full font-bold text-lg hover:bg-brand-cream hover:-translate-y-0.5 transition-all duration-300 shadow-2xl"
        >
          <Icon name="whatsapp" className="w-5 h-5" /> Chat & Book on WhatsApp
        </a>
      </div>
    </section>
  )
}