import { sendContactEmail } from '../services/mailService.js'

export async function submitContact(req, res) {
  try {
    await sendContactEmail(req.body)
    res.json({ message: 'Thank you! We have received your enquiry and will contact you soon.' })
  } catch (err) {
    console.error('Email error:', err.message)
    res.status(500).json({ message: 'Could not send your message. Please try calling us directly.' })
  }
}
