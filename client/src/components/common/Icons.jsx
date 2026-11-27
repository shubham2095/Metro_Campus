import {
  ShieldCheck, Wifi, UtensilsCrossed, Snowflake, BatteryCharging, ShowerHead,
  MapPin, MessageCircle, WashingMachine, Cctv, Wrench, GraduationCap,
  TrainFront, ShoppingBag, Hospital, Phone, Mail, Clock, Flame, Check,
  Star, ArrowRight, PartyPopper, SprayCan, ChefHat, Coffee, Dumbbell, Sofa, Lamp,
} from 'lucide-react'

/* ---------------------------------------------------------------
   Custom icons — these do not exist in lucide, so they are drawn
   in the same style (24x24 viewBox, stroke, round caps).
---------------------------------------------------------------- */
const s = {
  fill: 'none', stroke: 'currentColor', strokeWidth: 1.75,
  strokeLinecap: 'round', strokeLinejoin: 'round',
}

const TableTennis = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}>
    <circle cx="10" cy="9" r="6.5" />
    <path d="M7.2 14.9 5 19.4a1.8 1.8 0 0 0 2.6 2.2l3.5-3.3" />
    <circle cx="19.5" cy="17.5" r="2" />
  </svg>
)

const PoolTable = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}>
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="4.6" cy="8.6" r=".9" />
    <circle cx="19.4" cy="8.6" r=".9" />
    <circle cx="4.6" cy="15.4" r=".9" />
    <circle cx="19.4" cy="15.4" r=".9" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const Lift = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}>
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 15V9M6.5 11.5 9 9l2.5 2.5" />
    <path d="M15 9v6m-2.5-2.5L15 15l2.5-2.5" />
  </svg>
)

// Official WhatsApp glyph — lucide has no brand icons.
// This one is solid-filled, not stroked, so it ignores the shared style.
const WhatsApp = ({ className = '', ...p }) => (
  <svg viewBox="0 0 448 512" fill="currentColor" className={className} {...p}>
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
)

/* ---------------------------------------------------------------
   Registry — every icon name used anywhere on the site.
   Add new ones here only; components just call <Icon name="..." />
---------------------------------------------------------------- */
const REGISTRY = {
  // features
  shield: ShieldCheck,
  wifi: Wifi,
  meals: UtensilsCrossed,
  ac: Snowflake,
  power: BatteryCharging,
  hotwater: ShowerHead,
  location: MapPin,
  support: MessageCircle,
  // services
  laundry: WashingMachine,
  cctv: Cctv,
  maintenance: Wrench,
  // amenities
  housekeeping: SprayCan,
  guard: ShieldCheck,
  kitchen: ChefHat,
  cafeteria: Coffee,
  gym: Dumbbell,
  pool: PoolTable,
  tt: TableTennis,
  lounge: Sofa,
  study: Lamp,
  lift: Lift,
  // nearby
  college: GraduationCap,
  metro: TrainFront,
  market: ShoppingBag,
  hospital: Hospital,
  // contact / ui
  phone: Phone,
  mail: Mail,
  clock: Clock,
  flame: Flame,
  check: Check,
  star: Star,
  arrow: ArrowRight,
  party: PartyPopper,
  whatsapp: WhatsApp,
}

export default function Icon({ name, className = 'w-5 h-5', ...props }) {
  const Cmp = REGISTRY[name]
  if (!Cmp) {
    if (import.meta.env.DEV) console.warn(`<Icon /> — unknown name: "${name}"`)
    return null
  }
  return <Cmp className={className} aria-hidden="true" {...props} />
}