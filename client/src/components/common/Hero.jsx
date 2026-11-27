import { Link } from 'react-router'
import Icon from './Icons'
import { waLink, stats } from '../../data/siteData'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/home/hero.jpg"
          alt="Metro Campus Living building"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/90 via-transparent to-transparent"></div>
      </div>

      {/* Decorative floating blobs */}
      <div className="absolute top-24 right-10 w-72 h-72 bg-brand-green/20 rounded-full blur-3xl animate-floaty"></div>
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-brand-green/10 rounded-full blur-3xl animate-floaty" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 text-white w-full">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fadeUp">
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse"></span>
            #1 Rated PG for Boys in Shakti Nagar
          </span>

          <h1 className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[1.05] md:leading-none mb-6 animate-fadeUp" style={{ animationDelay: '0.1s' }}>
            Your Premium <span className="text-gradient-light">Home</span><br />Away From Home
          </h1>

          <p className="text-lg text-gray-200 mb-9 max-w-xl animate-fadeUp" style={{ animationDelay: '0.2s' }}>
            Experience comfortable, safe and affordable PG accommodation with all modern amenities.
            Fully furnished rooms, delicious food and 24×7 security.
          </p>

          <div className="flex flex-wrap gap-4 animate-fadeUp" style={{ animationDelay: '0.3s' }}>
            <a
              href={waLink('Hi! I want to Book a Room at Metro Campus Living. Please share availability and pricing.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base"
            >
              Book Now <Icon name="arrow" className="w-4 h-4" />
            </a>
            <Link to="/rooms" className="btn-outline text-base">View Rooms</Link>
          </div>

          {/* Glass stat cards */}
          <div className="grid grid-cols-3 gap-4 mt-14 max-w-xl animate-fadeUp" style={{ animationDelay: '0.4s' }}>
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-5 text-center hover:bg-white/15 transition-colors">
                <div className="font-heading font-extrabold text-3xl md:text-4xl text-white">{s.value}</div>
                <div className="text-xs md:text-sm text-gray-300 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-white/60">
        <span className="text-xs mb-2 tracking-widest">SCROLL</span>
        <span className="w-5 h-9 border-2 border-white/40 rounded-full flex justify-center pt-1.5">
          <span className="w-1 h-2 bg-white/70 rounded-full animate-bounce"></span>
        </span>
      </div>
    </section>
  )
}