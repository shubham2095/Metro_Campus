import { business, waLink } from '../../data/siteData'
import Icon from '../common/Icons'

export default function TopBar() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-brand-darker via-brand-dark to-brand-darker text-gray-200 text-sm">
      {/* animated moving sheen */}
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(110deg,transparent,white,transparent)] bg-[length:200%_100%] animate-shimmer pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between flex-wrap gap-2">
        {/* Left: contact info */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={`tel:${business.phones[0]}`}
            className="group flex items-center gap-2 hover:text-white transition-colors"
          >
            <span className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center group-hover:bg-brand-green group-hover:scale-110 transition-all duration-300">
              <Icon name="phone" className="w-3 h-3" />
            </span>
            <span className="font-medium">+91 {business.phones[0]}</span>
          </a>

          <span className="hidden sm:inline w-px h-4 bg-white/20"></span>
          <a
            href={`mailto:${business.email}`}
            className="group hidden sm:flex items-center gap-2 hover:text-white transition-colors"
          >
            <span className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center group-hover:bg-brand-green group-hover:scale-110 transition-all duration-300">
              <Icon name="mail" className="w-3 h-3" />
            </span>
            <span className="font-medium">{business.email}</span>
          </a>
        </div>

        {/* Right: availability + WhatsApp */}
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="hidden md:flex items-center gap-2 text-gray-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-lime"></span>
            </span>
            Rooms Available Now
          </span>
          <a
            href={waLink('Book Room Now')}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-1.5 bg-green-600 hover:bg-green-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_-6px_rgba(34,197,94,0.7)]"
          >
            <Icon name="whatsapp" className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}