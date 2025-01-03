"use client";

import { useEffect, useState } from "react";
import { Products } from "@/lib/ApiData";
import { FeaturedProductsCard } from "@/components/FeaturedProductsCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=4");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <motion.div
      className="container mx-auto p-8 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-4xl font-extrabold text-center mb-8 text-gray-800"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Featured <span className="text-indigo-600">Products</span>
      </motion.h2>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <Skeleton
              key={index}
              className="h-80 bg-gray-200 rounded-lg shadow-md animate-pulse"
            />
          ))}
        </div>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <FeaturedProductsCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      )}

      <div className="mt-8  text-center">
        <Link href="/product">
          <Button
            className="bg-indigo-500 text-white hover:bg-indigo-700 transition-all duration-300 px-6 py-3 rounded-lg shadow-md font-semibold flex items-center justify-center gap-2"
          >
            View All Products
            <FiArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default FeaturedProducts;
