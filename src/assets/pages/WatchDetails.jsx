import { useParams } from "react-router-dom";
import { watches } from "../data/watches";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function WatchDetails() {
  const { id } = useParams(); // Get the watch ID from the URL
  const watch = watches.find((w) => w.id === parseInt(id));

  if (!watch) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center text-xl text-gray-700">
          Watch not found.
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 p-6 md:p-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Watch Image */}
          {/* Watch Image */}
          <div className="flex-1 flex justify-center items-start">
            <img
              src={watch.img}
              alt={watch.name}
              className="max-w-full md:max-w-md rounded-xl shadow-lg object-contain"
            />
          </div>

          {/* Watch Info */}
          <div className="flex-1">
            <h1 className="text-4xl font-serif mb-4 text-[#8c233f]">
              {watch.name}
            </h1>
            <p className="text-xl text-gray-700 mb-2">
              Price: <span className="font-semibold">{watch.price}</span>
            </p>
            {watch.originalPrice && (
              <p className="text-gray-500 mb-2 line-through">
                Original: {watch.originalPrice}
              </p>
            )}
            {watch.discount && (
              <p className="text-[#EF4444] font-semibold mb-4">
                {watch.discount}
              </p>
            )}

            {/* Description */}
            <h2 className="text-2xl font-serif mb-2">Description</h2>
            <p className="text-gray-700 mb-4">{watch.description}</p>

            {/* Features */}
            <h2 className="text-2xl font-serif mb-2">Features</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {watch.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            {/* Rating */}
            <p className="text-gray-800 font-semibold">
              Rating: {watch.rating} ⭐
            </p>
            <button
              className="w-full bg-[#8c233f] text-white py-2 font-semibold text-sm hover:bg-[#691b30] transition-colors duration-300"
              onClick={() => alert(`Added ${watch.name} to cart!`)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
