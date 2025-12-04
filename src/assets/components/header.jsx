import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

export default function Header() {
  const { cartItems } = useContext(CartContext); // ✅ get cartItems from context

  return (
    <header className="bg-[#f9f1f5] shadow-sm text-gray-900 py-6 px-6 md:px-[85px] flex items-center justify-between sticky top-0 z-50 gap-6">
      {/* Logo */}
      <h1 className="text-2xl font-serif flex-shrink-0">
        Timeless <span className="text-[#8c233f]">Watches</span>
      </h1>

      {/* Search */}
      <div className="relative flex-1 max-w-xl">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search watches..."
          className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-[#d75d52] focus:outline-none transition-all duration-200"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-shrink-0 flex items-center gap-6">
        <ul className="hidden md:flex gap-6">
          <li>
            <Link to="/" className="hover:text-pink-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-pink-600 transition">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-pink-600 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-pink-600 transition">
              About
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4 ml-4">
          <Link
            to="/cart"
            className="relative text-gray-700 hover:text-[#EF4444] transition"
          >
            <FiShoppingCart size={22} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>

          <Link
            to="/account"
            className="text-gray-700 hover:text-[#EF4444] transition"
          >
            <FiUser size={22} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
