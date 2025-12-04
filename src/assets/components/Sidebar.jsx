export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-72 p-6 gap-6 h-screen sticky top-0">
      {/* Categories */}
      <div className="bg-[#8c233f] p-6 rounded-xl hover:shadow-xl transition">
        <h4 className="font-semibold text-lg text-pink-50 mb-4">Categories</h4>
        <ul className="text-pink-50 text-[15px] space-y-3">
          <li className="hover:text-[#FF7F50] transition cursor-pointer">
            Men Watches
          </li>
          <li className="hover:text-[#FF7F50] transition cursor-pointer">
            Women Watches
          </li>
          <li className="hover:text-[#FF7F50] transition cursor-pointer">
            Kid Watches
          </li>
        </ul>
      </div>

      <div className="bg-red-600 p-4 rounded-xl text-white text-center">
        <h4 className="font-semibold mb-1">Hot Deal!</h4>
        <p className="text-sm">Up to 50% off select watches</p>
      </div>

      <div className="bg-white p-6 rounded-xl transition border-[1px] border-[#8c233f]">
        <h4 className="font-semibold text-gray-900 mb-4">Top-Rated Watches</h4>
        <ul className="space-y-3">
          <li className="flex items-center gap-2 cursor-pointer hover:text-[#FF7F50] transition">
            <img
              src="/images/B3.png"
              alt="watch"
              className="w-10 h-10 object-cover rounded"
            />
            <span>Rose Gold Charm</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-[#FF7F50] transition">
            <img
              src="/images/adit.jpg"
              alt="watch"
              className="w-10 h-10 object-cover rounded"
            />
            <span>Silver Elegance</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-[#FF7F50] transition">
            <img
              src="/images/a.jpg"
              alt="watch"
              className="w-10 h-10 object-cover rounded"
            />
            <span>Midnight Black</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
