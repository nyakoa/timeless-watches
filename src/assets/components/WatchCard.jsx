import { Link } from "react-router-dom";

export default function WatchCard({ watch }) {
  return (
    <div className="flex flex-col items-center group relative">
      <Link to={`/watch/${watch.id}`} className="flex flex-col items-center">
        <div className="w-48 h-48 rounded-lg overflow-hidden flex justify-center items-center transition transform hover:-translate-y-4 hover:scale-105 p-2 relative">
          <img
            src={watch.img}
            alt={watch.name}
            loading="lazy"
            className="w-full h-full object-cover rounded-lg"
          />
          {watch.discount && (
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
              {watch.discount}
            </span>
          )}
        </div>
        <div className="text-center mt-3">
          <h3 className="text-base font-semibold mb-1 text-gray-900 hover:text-[#FF7F50] transition">
            {watch.name}
          </h3>
          {watch.originalPrice ? (
            <p className="text-gray-700 text-sm">
              <span className="line-through mr-2">{watch.originalPrice}</span>
              <span className="font-semibold">{watch.price}</span>
            </p>
          ) : (
            <p className="text-gray-700 text-sm">{watch.price}</p>
          )}
        </div>
      </Link>
    </div>
  );
}
