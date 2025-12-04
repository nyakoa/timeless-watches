export default function Hero() {
  return (
    <section
      className="relative h-96 w-full flex items-center justify-center text-white rounded-lg overflow-hidden"
      style={{
        backgroundImage: "url('/images/legacy4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 text-center max-w-2xl bg-black/30 p-6 rounded-lg">
        <h2 className="text-4xl md:text-5xl font-serif font-bold">
          Timeless Luxury, Perfectly Crafted
        </h2>
        <p className="mt-4 text-lg text-gray-50">
          Discover our curated collection of premium watches for every style and
          occasion.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#EF4444] rounded-full text-white hover:bg-[#DC2626] transition">
          Shop Hot Deals
        </button>
      </div>
    </section>
  );
}
