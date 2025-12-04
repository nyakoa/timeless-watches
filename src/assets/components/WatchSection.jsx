import WatchCard from "./WatchCard";

export default function WatchSection({ title, watches }) {
  return (
    <section>
      <div className="flex justify-center mb-8">
        <h3 className="text-2xl md:text-3xl font-serif text-gray-900 relative pb-2">
          {title}
          {/* Short, centered underline */}
          <span className="absolute left-1/2 bottom-0 w-24 h-1 bg-[#8c233f] transform -translate-x-1/2"></span>
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {watches.map((watch) => (
          <WatchCard key={watch.id} watch={watch} />
        ))}
      </div>
    </section>
  );
}
