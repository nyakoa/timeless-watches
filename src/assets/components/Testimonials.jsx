export default function Testimonials() {
  const testimonials = [
    { name: "Alice", review: "Amazing watches! Perfect gift for my husband." },
    {
      name: "John",
      review: "High quality and fast delivery. Highly recommend!",
    },
    { name: "Sophie", review: "Beautiful design and great customer service." },
  ];

  return (
    <section className="bg-white p-12 rounded-xl shadow-lg mt-16">
      <h3 className="text-2xl md:text-3xl font-serif mb-8 text-center text-[#8c233f]">
        What Our Customers Say
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-lg text-center">
            <p className="text-gray-700 mb-4">"{t.review}"</p>
            <h4 className="font-semibold text-gray-900">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
