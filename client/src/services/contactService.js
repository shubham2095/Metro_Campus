import { api } from './api'

// Sends the enquiry form to the server, which emails the PG owner.
export function sendContactMessage(form) {
  return api('/contact', { method: 'POST', body: form })
}
