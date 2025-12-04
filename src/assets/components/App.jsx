import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import WatchSection from "./WatchSection";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import ScrollButton from "./ScrollBtn";
import { watches } from "../data/watches";
import Cart from "../pages/Cart";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const scrollBtn = document.getElementById("scrollTopBtn");
    const handleScroll = () => {
      scrollBtn.style.display = window.scrollY > 400 ? "flex" : "none";
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const getCategoryWatches = (category) =>
    watches.filter((watch) => watch.category === category);

  // Add item to cart
  const addToCart = (watch) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === watch.id);
      if (exists) {
        return prev.map((item) =>
          item.id === watch.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...watch, quantity: 1 }];
      }
    });
  };

  return (
    <div className="bg-gray-100">
      {/* Pass cartItems to Header so it can show count */}
      <Header cartItems={cartItems} />

      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 flex flex-col gap-16 px-6 md:px-12">
          <Hero />
          {["Hot deals", "New arrivals"].map((category) => (
            <WatchSection
              key={category}
              title={category}
              watches={getCategoryWatches(category)}
              addToCart={addToCart} // pass addToCart to watch sections
            />
          ))}
          <Testimonials />
        </main>
      </div>

      {/* Cart component */}
      <Cart cartItems={cartItems} setCartItems={setCartItems} />

      <Footer />
      <ScrollButton onClick={scrollToTop} />
    </div>
  );
}
