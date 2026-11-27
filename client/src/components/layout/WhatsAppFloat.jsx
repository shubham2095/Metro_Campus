import Icon from '../common/Icons'
import { waLink } from '../../data/siteData'

export default function WhatsAppFloat() {
  const message = 'Hi! I want to Book a Room at Metro Campus Living. Please share availability and pricing.'

  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* pulsing ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-pulseRing"></span>

      {/* button */}
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] group-hover:bg-[#1ebe5d] shadow-lg group-hover:scale-110 transition-all duration-300">
        <Icon name="whatsapp" className="w-7 h-7 text-white" />
      </span>
    </a>
  )
}