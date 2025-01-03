"use client";

import { motion } from "framer-motion";
import { AiOutlineHeart } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addToCart, Products } from "@/lib/ApiData";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import Link from "next/link";

// Function to fetch wishlist IDs from localStorage
function getWishlist(): number[] {
  if (typeof window !== "undefined") {
    const wishlist = localStorage.getItem("wishlist");
    return wishlist ? JSON.parse(wishlist) : [];
  }
  return [];
}

// Function to fetch product data by ID (replace with API call if needed)
async function fetchProductById(productId: number): Promise<Products | null> {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    if (!response.ok) throw new Error("Failed to fetch product");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch wishlist products based on IDs
  useEffect(() => {
    const fetchWishlistItems = async () => {
      const wishlistIds = getWishlist();
      const products = await Promise.all(
        wishlistIds.map((id) => fetchProductById(id))
      );
      setWishlistItems(products.filter((product) => product !== null)); // Remove nulls
      setLoading(false);
    };
    fetchWishlistItems();
  }, []);

  // Handle removing items from wishlist
  const handleRemoveFromWishlist = (productId: number) => {
    const wishlist = getWishlist().filter((id) => id !== productId);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    setWishlistItems(wishlistItems.filter((item) => item.id !== productId)); // Update UI
    toast.error("Product removed from your wishlist.");
  };

  return (
    <div className="bg-neutral-background flex items-center justify-center py-16 border-x-2 border-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-primary"
        >
          Your Wishlist
        </motion.h2>

        {/* If loading */}
        {loading ? (
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 text-center min-h-screen text-dark-slate"
        >
          <p className="text-xl font-semibold">Loading your wishlist...</p>
        </motion.div>
        
        ) : wishlistItems.length === 0 ? (
          // If Wishlist is Empty
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-10 min-h-screen  text-center text-dark-slate"
          >
            <AiOutlineHeart size={60} className="mx-auto mb-4 text-primary" />
            <p className="text-xl font-semibold">Your Wishlist is Empty</p>
            <p className="mt-4 text-gray-500">
              Browse products and add them to your wishlist!
            </p>
          </motion.div>
        ) : (
          // If there are items in the wishlist
          <div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800">
              {wishlistItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl flex flex-col justify-between border-2 border-solid border-gray-300"
                >
                  <Link href={`/product/${item.id}`} className="p-6 space-y-4 text-center flex flex-col h-full items-center justify-between"  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-40 h-auto mx-auto object-cover transition-transform duration-300 group-hover:scale-110 "
                      width={400}
                      height={400}
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-dark-slate">
                        {item.title}
                      </h3>

                      <p className="text-lg font-bold mt-5 ">
                        ${item.price}
                      </p>
                    </div>
                  </Link>

                  <div className="flex justify-between items-center mb-6 mx-6">
                    <Button
                      className="w-full"
                      variant="secondary"
                      onClick={() => {
                        addToCart({
                          id: item.id,
                          title: item.title, // Assuming item.name maps to title
                          price: Number(item.price), // Ensure price is a number
                          rate: item.rating?.rate || 0, // Default to 0 if rating is unavailable
                          image: item.image, // Assuming the item has an image property
                          itemCount: 1, // Default to 1
                          size: "", // Adjust if size is available
                          color: "", // Adjust if color is available
                        });
                        handleRemoveFromWishlist(item.id);
                      }}
                    >
                      <BsFillCartFill size={20} /><span>Move to Cart</span>
                    </Button>
                    <Button
                      onClick={() => handleRemoveFromWishlist(item.id)}
                      className="bg-destructive text-destructive-foreground transition duration-300 flex items-center justify-center"
                    >
                      <FaTrashAlt size={20} />
                    </Button>
                  </div>

                </motion.div>
              ))}
            </div>
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Button className="bg-primary text-white px-6 py-2 md:px-10 md:py-8 md:text-xl rounded">
                <Link href="/product" className="flex items-center gap-2">Continue Shopping <BsFillCartFill size={20} /></Link>
              </Button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
