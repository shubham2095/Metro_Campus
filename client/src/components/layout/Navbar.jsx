import { useState, useEffect } from 'react'
import { NavLink } from 'react-router'
import { business, waLink } from '../../data/siteData'
import Icon from '../common/Icons'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Rooms', to: '/rooms' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const linkClass = ({ isActive }) =>
    `relative font-medium transition-colors py-1 ${
      isActive ? 'text-brand-green' : 'text-gray-700 hover:text-brand-green'
    } after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-brand-gradient after:transition-all after:duration-300 ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg py-2' : 'bg-white py-3.5 shadow-xs'}`}>
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/images/brand/logo.png"
            alt={business.name}
            className="h-16 w-16 rounded-full object-contain shrink-0"
          />
          <div className="leading-tight">
            <span className="block font-heading font-extrabold text-brand-dark text-lg">
              Metro Campus <span className="text-gradient">Living</span>
            </span>
            <span className="block text-[0.7rem] text-gray-500 tracking-[0.2em] uppercase">{business.tagline}</span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={linkClass} end={l.to === '/'}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right side: phone + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href={`tel:${business.phones[0]}`} className="group flex items-center gap-2 text-gray-700 hover:text-brand-green transition-colors">
            <span className="w-9 h-9 rounded-full bg-brand-creamDeep text-brand-greenDark flex items-center justify-center group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-300">
              <Icon name="phone" className="w-4 h-4" />
            </span>
            <span className="leading-tight">
              <span className="block text-[0.65rem] text-gray-400 uppercase tracking-wide">Call Us</span>
              <span className="block text-sm font-semibold">+91 {business.phones[0]}</span>
            </span>
          </a>
          <a
            href={waLink('Hi! I want to Book a Room at Metro Campus Living. Please share details.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-book"
          >
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 z-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-brand-dark rounded-full transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-brand-dark rounded-full transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-brand-dark rounded-full transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="bg-white border-t px-4 py-4 space-y-1 shadow-lg">
          {links.map((l, i) => (
            <li
              key={l.to}
              className={`transition-all duration-300 ${open ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
              style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
            >
              <NavLink
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block font-medium py-2.5 px-3 rounded-xl transition-colors ${
                    isActive ? 'text-brand-green bg-brand-creamDeep' : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2 flex flex-col gap-2">
            <a href={`tel:${business.phones[0]}`} className="flex items-center justify-center gap-2 border-2 border-brand-green text-brand-green px-5 py-2.5 rounded-full font-semibold">
              <Icon name="phone" className="w-4 h-4" /> +91 {business.phones[0]}
            </a>
            <a
              href={waLink('Hi! I want to Book a Room at Metro Campus Living.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-book text-center"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}