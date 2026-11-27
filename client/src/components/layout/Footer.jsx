import { Link } from 'react-router'
import { business, rooms, waLink } from '../../data/siteData'
import Icon from '../common/Icons'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/images/brand/logo.png" alt={business.name} className="h-12 w-12 rounded-full object-contain" />
            <span className="font-heading font-extrabold text-white text-lg">
              Metro Campus <span className="text-brand-lime">Living</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Premium paying-guest accommodation for boys with all modern amenities — safe, clean and
            affordable. Your home away from home.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-brand-lime">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand-lime">About Us</Link></li>
            <li><Link to="/rooms" className="hover:text-brand-lime">Our Rooms</Link></li>
            <li><Link to="/services" className="hover:text-brand-lime">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-lime">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-brand-lime">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Room Types</h4>
          <ul className="space-y-2 text-sm">
            {rooms.map((r) => (
              <li key={r.id}>
                <a
                  href={waLink(`I want info about ${r.name} at Metro Campus Living`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-lime"
                >
                  {r.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Get In Touch</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <Icon name="location" className="w-4 h-4 shrink-0 mt-0.5 text-brand-lime" /> {business.address}
            </li>
            {business.phones.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Icon name="phone" className="w-4 h-4 shrink-0 text-brand-lime" />
                <a href={`tel:${p}`} className="hover:text-brand-lime">+91 {p}</a>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Icon name="mail" className="w-4 h-4 shrink-0 text-brand-lime" />
              <a href={`mailto:${business.email}`} className="hover:text-brand-lime break-all">{business.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="clock" className="w-4 h-4 shrink-0 text-brand-lime" /> {business.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} <span className="font-semibold text-gray-300">{business.name}</span>. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-center sm:text-right">
            Powered by{' '}
            <a
              href="https://heltog.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              Heltog Technologies Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}