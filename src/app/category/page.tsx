"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Products } from "@/lib/ApiData";
import { FeaturedProductsCard } from "@/components/FeaturedProductsCard";
import { FaPaperPlane } from "react-icons/fa";

const CategorySection = () => {
  const categories = [
    "Electronics",
    "Jewelery",
    "Men's Clothing",
    "Women's Clothing",
  ];

  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("electronics");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  return (
    <motion.div
      className="container mx-auto my-16 px-4 lg:px-16 text-center h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Section Heading */}
      <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-primary">
        Browse Our <span className="text-secondary">Categories</span>
      </h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {categories.map((category) => (
          <Button
            key={category}
            className={`${
              selectedCategory === category
                ? "bg-indigo-700 hover:bg-indigo-800"
                : "bg-indigo-600 hover:bg-indigo-700"
            } text-white text-xs md:text-base px-4 py-2 rounded`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Product Display */}
      {loading ? (
        <div className="mt-8 flex justify-center space-x-4">
          {[...Array(4)].map((_, index) => (
            <Skeleton
              key={index}
              className="flex-shrink-0 w-64 h-80 bg-gray-200 rounded-lg shadow-md animate-pulse"
            />
          ))}
        </div>
      ) : (
        <div className="mt-8">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-600">No products found in this category.</p>
          ) : (
            <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
              {filteredProducts.slice(0, 4).map((product) => (
                <motion.div
                  key={product.id}
                  className="min-w-[80%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[23%]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FeaturedProductsCard product={product} />
                </motion.div>
              ))}
            </div>
          )}

          {/* View All Button */}
          <div className="mt-8 text-center">
            <Link href={`/category/${selectedCategory}`}>
              <Button className="bg-indigo-500 text-white hover:bg-indigo-700 transition-all duration-300 px-6 py-3 rounded-lg shadow-md font-semibold flex items-center justify-center gap-2">
                View All {selectedCategory}
                <FaPaperPlane className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CategorySection;

