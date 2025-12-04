import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import WatchCard from "../components/WatchCard";
import { watches } from "../data/watches";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Hot deals", "New arrivals"];

  const filteredWatches =
    selectedCategory === "All"
      ? watches
      : watches.filter((watch) => watch.category === selectedCategory);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-12">
          <h2 className="text-3xl font-serif mb-8 text-[#8c233f] text-center">
            Shop Watches
          </h2>

          {/* Category Filters */}
          <div className="flex justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full border ${
                  selectedCategory === cat
                    ? "bg-[#EF4444] text-white border-[#EF4444]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-[#EF4444] hover:text-white transition"
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Watch Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredWatches.map((watch) => (
              <WatchCard key={watch.id} watch={watch} />
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
