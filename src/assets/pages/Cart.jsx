import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price.slice(1)) * item.quantity,
    0
  );

  if (cartItems.length === 0)
    return (
      <div className="p-6 text-center text-gray-700">Your cart is empty.</div>
    );

  return (
    <div className="p-6 max-w-[36rem] mx-auto bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-[#8c233f]">Your Cart</h2>
      <ul className="divide-y divide-gray-200 mb-4">
        {cartItems.map((item) => (
          <li key={item.id} className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500">{item.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => updateQuantity(item.id, -1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => updateQuantity(item.id, 1)}
              >
                +
              </button>
              <button
                className="ml-4 text-red-500 hover:underline"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center font-semibold text-lg">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button
        className="w-full mt-4 py-2 bg-[#8c233f] text-white rounded hover:bg-[#691b30] transition"
        onClick={() => alert("Proceed to checkout!")}
      >
        Checkout
      </button>
    </div>
  );
}
