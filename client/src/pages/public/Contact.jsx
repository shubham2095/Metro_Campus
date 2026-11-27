import { useState } from 'react'
import PageBanner from '../../components/common/PageBanner'
import SectionTitle from '../../components/common/SectionTitle'
import Icon from '../../components/common/Icons'
import { business, waLink } from '../../data/siteData'
import { sendContactMessage } from '../../services/contactService'

const initial = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState({ type: '', msg: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: '', msg: '' })
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', msg: 'Please fill in your name, email and message.' })
      return
    }
    try {
      setLoading(true)
      const data = await sendContactMessage(form)
      setStatus({ type: 'success', msg: data.message || 'Thank you! We will contact you soon.' })
      setForm(initial)
    } catch (err) {
      setStatus({
        type: 'error',
        // fetch throws a TypeError when the server can't be reached
        msg: err instanceof TypeError ? 'Something went wrong. Please try WhatsApp or call us directly.' : err.message,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Have a question or want to book a visit? Reach out — we'd love to help."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Info + WhatsApp */}
          <div>
            <SectionTitle eyebrow="Get In Touch" title="We're Here to Help" center={false} />

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <Icon name="location" className="w-5 h-5 shrink-0 mt-1 text-brand-green" />
                <div>
                  <h4 className="font-semibold text-brand-dark">Address</h4>
                  <p className="text-gray-600">{business.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="phone" className="w-5 h-5 shrink-0 mt-1 text-brand-green" />
                <div>
                  <h4 className="font-semibold text-brand-dark">Phone</h4>
                  <p className="text-gray-600">
                    {business.phones.map((p, i) => (
                      <span key={p}>
                        <a href={`tel:${p}`} className="hover:text-brand-green">+91 {p}</a>
                        {i < business.phones.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="mail" className="w-5 h-5 shrink-0 mt-1 text-brand-green" />
                <div>
                  <h4 className="font-semibold text-brand-dark">Email</h4>
                  <a href={`mailto:${business.email}`} className="text-gray-600 hover:text-brand-green">{business.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="clock" className="w-5 h-5 shrink-0 mt-1 text-brand-green" />
                <div>
                  <h4 className="font-semibold text-brand-dark">Hours</h4>
                  <p className="text-gray-600">{business.hours}</p>
                </div>
              </div>
            </div>

            <a
              href={waLink('Hi! I want to Book a Room at Metro Campus Living. Please share availability.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              <Icon name="whatsapp" className="w-5 h-5" /> Chat on WhatsApp
            </a>

            <div className="mt-8 rounded-2xl overflow-hidden border border-gray-100 shadow-xs">
              <iframe
                title="Metro Campus Living Location"
                src= {business.mapEmbed}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Email form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-fit">
            <h3 className="font-heading font-semibold text-xl text-brand-dark mb-6">Send us a message</h3>
            <div className="space-y-4">
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name *"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-hidden" />
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email *"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-hidden" />
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Your Phone"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-hidden" />
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message *" rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-hidden resize-none"></textarea>

              {status.msg && (
                <p className={`text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>{status.msg}</p>
              )}

              <button onClick={handleSubmit} disabled={loading}
                className="w-full bg-brand-green text-white py-3 rounded-lg font-semibold hover:bg-brand-greenDark transition-colors disabled:opacity-60">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
