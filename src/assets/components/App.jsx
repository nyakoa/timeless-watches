import { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import WatchSection from "./WatchSection";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import ScrollButton from "./ScrollBtn";
import { watches } from "../data/watches";

export default function App() {
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

  return (
    <div className="bg-gray-100">
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 flex flex-col gap-16 px-6 md:px-12">
          <Hero />
          {["Hot deals", "New arrivals"].map((category) => (
            <WatchSection
              key={category}
              title={category}
              watches={getCategoryWatches(category)}
            />
          ))}
          <Testimonials />
        </main>
      </div>
      <Footer />
      <ScrollButton onClick={scrollToTop} />
    </div>
  );
}
