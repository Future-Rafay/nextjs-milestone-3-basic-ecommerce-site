"use client"

// app/wishlist/page.tsx
import { motion } from "framer-motion";
import { AiOutlineHeart } from "react-icons/ai";  // React Icon for Heart
import { Button } from "@/components/ui/button";  // Assuming you're using ShadCN UI Button

// Sample Wishlist Data
const wishlistItems = [
  {
    id: 1,
    name: "Stylish Watch",
    description: "A sleek, modern watch to complement your style.",
    price: "$119.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Smartphone X",
    description: "High-end smartphone with an edge-to-edge display.",
    price: "$999.99",
    image: "https://via.placeholder.com/150",
  },
];

const Wishlist = () => {
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
          Your Wishlist
        </motion.h2>

        {/* If Wishlist is Empty */}
        {wishlistItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-10 text-center text-dark-slate"
          >
            <AiOutlineHeart size={60} className="mx-auto mb-4 text-indigo-600" />
            <p className="text-xl font-semibold">Your Wishlist is Empty</p>
            <p className="mt-4 text-gray-500">Browse products and add them to your wishlist!</p>
          </motion.div>
        ) : (
          // If there are items in the wishlist
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl"
              >
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-dark-slate">{item.name}</h3>
                  <p className="text-gray-500">{item.description}</p>
                  <p className="text-lg font-bold text-indigo-600">{item.price}</p>
                  <Button className="w-full mt-4" variant="secondary">
                    Move to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
