// ============================================================
//  METRO CAMPUS LIVING — SITE DATA
//  Edit everything here (phone, prices, rooms, services...).
//  All pages read from this file.
// ============================================================

export const business = {
  name: 'Metro Campus Living',
  tagline: 'PG For Boys',
  phones: ['8796334447', '8796334446'],
  email: 'metrocampusliving@gmail.com',
  address: '19/4 Shakti Nagar, Delhi - 110007',
  hours: 'Open 24 Hours',
  instagram: '#', // TODO: add Instagram link
  // WhatsApp uses the first phone (add country code 91)
  whatsapp: '918796334447',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.1604394734006!2d77.19498017862736!3d28.68004647443973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd886a97a0f1%3A0x7cc074dc39e181bc!2s19%2C%20Block%2019%2C%20Shakti%20Nagar%2C%20Delhi%2C%20110007!5e0!3m2!1sen!2sin!4v1783941033849!5m2!1sen!2sin'
}

// Helper to build WhatsApp links with a prefilled message
export const waLink = (message) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`

export const stats = [
  { value: '500+', label: 'Happy Residents' },
  { value: '10+', label: 'Years Experience' },
  { value: '50+', label: 'Rooms Available' },
]

export const features = [
  { icon: 'shield', title: 'Safe & Secure', desc: '24×7 CCTV surveillance, secure entry and trained security staff for your complete safety.' },
  { icon: 'wifi', title: 'High-Speed WiFi', desc: 'Unlimited high-speed internet for work, study and entertainment — no data limits.' },
  { icon: 'meals', title: 'Home-Cooked Meals', desc: 'Nutritious and delicious meals — breakfast, lunch, evening snacks and dinner included.' },
  { icon: 'ac', title: 'AC Rooms', desc: 'Fully air-conditioned rooms for maximum comfort throughout the year.' },
  { icon: 'power', title: 'Power Backup', desc: '24×7 power backup so you are never in the dark during load shedding.' },
  { icon: 'hotwater', title: 'Hot Water', desc: '24×7 geyser facility for hot water in every bathroom anytime you need.' },
  { icon: 'location', title: 'Prime Location', desc: 'Located near Delhi University, metro stations and markets for an easy daily commute.' },
  { icon: 'support', title: '24×7 Support', desc: 'Our team is always available on WhatsApp to solve any issue immediately.' },
]

// PLACEHOLDER pricing — edit prices/amenities freely
// Two room types only — Single and Double Sharing
export const rooms = [
  {
    id: 'single',
    name: 'Single Room',
    badge: 'Most Popular',
    image: '/images/rooms/single-room.webp',
    desc: 'Complete privacy in your own AC room with attached bathroom, study table, wardrobe and WiFi.',
    amenities: ['AC', 'WiFi', 'Attached Bath', 'Study Table'],
    price: '₹30,000 - ₹35,000',
    unit: '/ Month',
  },
  {
    id: 'double',
    name: 'Double Sharing',
    badge: 'Budget Friendly',
    image: '/images/rooms/double-room.webp',
    desc: 'Comfortable double-sharing room with all amenities. Great for students and working professionals.',
    amenities: ['AC', 'WiFi', 'Geyser', 'Wardrobe'],
    price: '₹20,000 - ₹22,000',
    unit: '/ Month / Person',
  },
]

export const services = [
  { icon: 'meals', title: 'Meals (4 Times)', desc: 'Hygienic home-cooked breakfast, lunch, evening snacks & dinner daily.' },
  { icon: 'laundry', title: 'Laundry', desc: 'Weekly laundry service with pickup & drop.' },
  { icon: 'cctv', title: 'CCTV Security', desc: 'Full premises covered with HD CCTV cameras 24×7.' },
  { icon: 'wifi', title: 'High-Speed WiFi', desc: 'Unlimited internet for all devices in the room.' },
  { icon: 'power', title: 'Power Backup', desc: 'Inverter backup for uninterrupted electricity.' },
  { icon: 'maintenance', title: 'Maintenance', desc: 'Quick maintenance support — just WhatsApp us!' },
]

// Compact amenity checklist — icon + label only (no descriptions).
// Renders as a 6×2 grid on desktop, 2×6 on mobile.
export const amenities = [
  { id: 'housekeeping', label: 'Housekeeping 24×7' },
  { id: 'cctv', label: 'CCTV Surveillance' },
  { id: 'guard', label: 'Security Guard' },
  { id: 'meals', label: '4-Time Meals' },
  { id: 'kitchen', label: 'Live Kitchen' },
  { id: 'cafeteria', label: 'Cafeteria' },
  { id: 'gym', label: 'Gym Facility' },
  { id: 'pool', label: 'Pool Table' },
  { id: 'tt', label: 'Table Tennis' },
  { id: 'lounge', label: 'Premium Lounge' },
  { id: 'study', label: 'Study Table' },
  { id: 'lift', label: 'Lift Access' },
]

export const testimonials = [
  { initial: 'R', name: 'Rahul Sharma', role: 'Student, Delhi University', text: 'Bahut hi acha PG hai! Room clean hai, food tasty, aur security 24/7 hai. Highly recommended!' },
  { initial: 'P', name: 'Priya Singh', role: 'Working Professional', text: 'Excellent facilities and very helpful staff. WiFi is super fast and the rooms are well maintained. Feels like home.' },
  { initial: 'A', name: 'Amit Verma', role: 'MBA Student', text: 'The best PG I have stayed in. AC room, geyser, power backup — everything is available. Very affordable too!' },
  { initial: 'S', name: 'Sahil Gupta', role: 'Software Engineer', text: 'Great location and very clean rooms. The food quality is excellent. Management is very cooperative.' },
  { initial: 'V', name: 'Vikas Tiwari', role: 'BCA Student', text: 'Sabse best PG! Room, food, WiFi, aur security — sab kuch top class hai. 5 star!' },
  { initial: 'N', name: 'Naveen Kumar', role: 'Commerce Student', text: 'Comfortable stay with all facilities. Staff is very friendly and booking on WhatsApp was super easy!' },
]

export const galleryImages = [
  { src: '/images/gallery/building-1.jpg', alt: 'Metro Campus Living building front' },
  { src: '/images/gallery/building-2.jpg', alt: 'Building exterior' },
  { src: '/images/gallery/building-3.jpg', alt: 'Building balconies' },
]

// Nearby DU colleges & landmarks (distances are approximate — verify & edit)
export const nearby = [
  { name: 'Kirori Mal College (DU)', distance: '~1.5 km', icon: 'college' },
  { name: 'Hindu College (DU)', distance: '~2 km', icon: 'college' },
  { name: 'Ramjas College (DU)', distance: '~1 km', icon: 'college' },
  { name: 'Hansraj College (DU)', distance: '~2 km', icon: 'college' },
  { name: 'St. Stephen\'s College (DU)', distance: '~1.5 km', icon: 'college' },
  { name: 'Miranda House (DU)', distance: '~2 km', icon: 'college' },
  { name: 'Daulat Ram College (DU)', distance: '~1 km', icon: 'college' },
  { name: 'Vishwavidyalaya Metro', distance: '~2 km', icon: 'metro' },
]
