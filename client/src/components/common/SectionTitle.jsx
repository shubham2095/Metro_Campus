
export default function SectionTitle({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`${center ? 'text-center' : ''} mb-14`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-brand-green font-semibold uppercase tracking-[0.15em] text-xs md:text-sm mb-3">
          <span className="w-6 h-px bg-brand-green"></span>
          {eyebrow}
          {center && <span className="w-6 h-px bg-brand-green"></span>}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      <div className={`brand-underline ${center ? 'mx-auto' : ''}`}></div>
      {subtitle && (
        <p className={`mt-5 text-gray-500 text-lg leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>{subtitle}</p>
      )}
    </div>
  )
}