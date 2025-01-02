"use client"

// app/cart/page.tsx
import { motion } from "framer-motion";
import { BsFillCartFill } from "react-icons/bs";  // React Icon for Cart
import { Button } from "@/components/ui/button";  // ShadCN UI Button

// Sample Cart Data
const cartItems = [
  {
    id: 1,
    name: "Stylish Watch",
    price: "$119.99",
    quantity: 1,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Smartphone X",
    price: "$999.99",
    quantity: 2,
    image: "https://via.placeholder.com/150",
  },
];

const Cart = () => {
  const totalAmount = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace("$", "")) * item.quantity, 0);

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
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-dark-slate">{item.name}</h3>
                  <p className="text-gray-500 mt-2">Price: {item.price}</p>
                  <p className="text-gray-500 mt-2">Quantity: {item.quantity}</p>
                </div>
                <p className="text-indigo-600 font-semibold">{`$${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}`}</p>
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
        <Button className="mt-6 w-full" variant="outline" disabled={cartItems.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
