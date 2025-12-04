export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-gray-300 py-12 px-6 md:px-[85px] mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-serif text-white mb-4">
            Timeless <span className="text-[#EF4444]">Watches</span>
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Crafting luxury timepieces that blend precision, elegance, and
            heritage. Every watch tells a story — make it yours.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#FF7F50] transition">
                Shop Collection
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF7F50] transition">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF7F50] transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">
            Stay Updated
          </h4>
          <p className="text-gray-400 mb-4">
            Join our newsletter for exclusive offers and updates.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md bg-[#1A1A1A] text-white outline-none"
            />
            <button className="bg-[#EF4444] px-4 py-2 rounded-r-md text-white hover:bg-[#DC2626] transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Timeless Watches. All rights reserved.
      </div>
    </footer>
  );
}
