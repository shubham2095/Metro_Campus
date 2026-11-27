import { waLink } from '../../data/siteData'

export default function RoomCard({ room }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-lg transition-all overflow-hidden flex flex-col">
      <div className="relative">
        <img src={room.image} alt={room.name} className="w-full h-52 object-cover" />
        <span className="absolute top-3 left-3 bg-brand-green text-white text-xs font-semibold px-3 py-1 rounded-full">
          {room.badge}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading font-semibold text-xl text-brand-dark mb-2">{room.name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{room.desc}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {room.amenities.map((a) => (
            <span key={a} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
              {a}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <div className="mb-4">
            <span className="font-heading font-extrabold text-2xl text-brand-green">{room.price}</span>
            <span className="text-gray-500 text-sm"> {room.unit}</span>
          </div>
          <a
            href={waLink(`Hi! I am interested in the ${room.name} at Metro Campus Living. Please share more details and availability.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-brand-green text-white py-2.5 rounded-lg font-semibold hover:bg-brand-greenDark transition-colors"
          >
            Book This Room
          </a>
        </div>
      </div>
    </div>
  )
}
