"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsFillCartFill } from "react-icons/bs"; // React Icon for Cart
import { Button } from "@/components/ui/button"; // ShadCN UI Button
import { CartProduct, getCart, handleItemCount, removeFromCart } from "@/lib/ApiData";
import { toast } from "react-toastify";
import Image from "next/image";

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  // Fetch cart items from localStorage on component mount
  useEffect(() => {
    const fetchCart = () => {
      const items = getCart();
      setCartItems(items);
      updateTotalAmount(items);
    };

    fetchCart();

    // Listen for cart updates
    const handleCartUpdate = () => fetchCart();
    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  // Update total amount whenever cart items change
  const updateTotalAmount = (items: CartProduct[]) => {
    const total = items.reduce((sum, item) => sum + item.price * item.itemCount, 0);
    setTotalAmount(total);
  };

  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    updateTotalAmount(updatedItems);
    toast.error("Product removed from your cart.");
  };

  const handleUpdateItemCount = (id: number, count: number) => {
    handleItemCount(id, count);
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, itemCount: item.itemCount + count } : item
    );
    setCartItems(updatedItems.filter((item) => item.itemCount > 0));
    updateTotalAmount(updatedItems);
  };

  return (
    <div className="bg-light-gray py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-indigo-600"
        >
          Your Cart
        </motion.h2>

        {/* If Cart is Empty */}
        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-10 text-center text-dark-slate"
          >
            <BsFillCartFill size={60} className="mx-auto mb-4 text-indigo-600" />
            <p className="text-xl font-semibold">Your Cart is Empty</p>
            <p className="mt-4 text-gray-500">Browse our products and add them to your cart!</p>
          </motion.div>
        ) : (
          // If there are items in the cart
          <div className="mt-10 space-y-8">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-6"
              >
                <Image src={item.image} alt={item.title} className="w-24 h-24 object-cover" width={96} height={96}/>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-dark-slate">{item.title}</h3>
                  <p className="text-gray-500 mt-2">Price: ${item.price.toFixed(2)}</p>
                  <p className="text-gray-500 mt-2">
                    Quantity:{" "}
                    <button
                      onClick={() => handleUpdateItemCount(item.id, -1)}
                      className="px-2 text-white bg-red-500 rounded ml-2 hover:bg-red-600"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.itemCount}</span>
                    <button
                      onClick={() => handleUpdateItemCount(item.id, 1)}
                      className="px-2 text-white bg-green-500 rounded hover:bg-green-600"
                    >
                      +
                    </button>
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-indigo-600 font-semibold">
                    ${(item.price * item.itemCount).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="mt-4 text-red-600 hover:text-red-700 transition duration-300"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Total Amount and Checkout */}
        {cartItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 flex justify-between items-center text-lg font-semibold"
          >
            <p>Total Amount:</p>
            <p className="text-indigo-600">{`$${totalAmount.toFixed(2)}`}</p>
          </motion.div>
        )}
        <Button
          className="mt-6 w-full"
          variant="outline"
          disabled={cartItems.length === 0}
          onClick={() => toast.success("Proceeding to checkout!")}
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
