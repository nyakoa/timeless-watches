export default function ScrollButton({ onClick }) {
  return (
    <button
      id="scrollTopBtn"
      onClick={onClick}
      className="hidden fixed bottom-8 right-8 bg-[#EF4444] text-white p-4 rounded-full shadow-lg hover:bg-[#DC2626] transition"
    >
      ↑
    </button>
  );
}
