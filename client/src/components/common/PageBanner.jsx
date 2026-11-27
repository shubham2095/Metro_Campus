
export default function PageBanner({ title, subtitle }) {
  return (
    <section className="relative py-24 md:py-28 bg-dark-gradient text-white overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        <img src="/images/home/banner.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-dark/80 to-transparent"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-brand-green/20 rounded-full blur-3xl animate-floaty"></div>

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl mb-4 animate-fadeUp">{title}</h1>
        {subtitle && (
          <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fadeUp" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
        )}
        <div className="brand-underline mx-auto mt-6"></div>
      </div>
    </section>
  )
}