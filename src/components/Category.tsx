"use client";

import { useEffect, useState } from "react";
import { Products } from "@/lib/ApiData";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FeaturedProductsCard } from "./FeaturedProductsCard";
import { FaPaperPlane } from "react-icons/fa";

const Categories = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("women's clothing");

  const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

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
      className="container mx-auto p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
        Explore <span className="text-indigo-600">Categories</span>
      </h2>

      {loading ? (
        <div className="container mx-auto p-8">
          <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {[...Array(4)].map((_, index) => (
              <Skeleton
                key={index}
                className="flex-shrink-0 w-64 h-80 bg-gray-200 rounded-lg shadow-md animate-pulse"
              />
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                className={`${
                  selectedCategory === category.toLowerCase()
                    ? "text-xs md:text-base bg-indigo-700 hover:bg-indigo-800"
                    : "text-xs md:text-base bg-indigo-600 hover:bg-indigo-700"
                } text-white`}
                onClick={() => setSelectedCategory(category.toLowerCase())}
              >
                {category}
              </Button>
            ))}
          </div>

          {selectedCategory && (
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 capitalize">
                {selectedCategory}
              </h3>
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

              <div className="mt-8 text-center">
                <Link href={`/category/${selectedCategory}`}>
                  <Button
                    className="bg-indigo-500 text-white hover:bg-indigo-700 transition-all duration-300 px-6 py-3 rounded-lg shadow-md font-semibold flex items-center justify-center gap-2"
                  >
                    View All {selectedCategory}
                    <FaPaperPlane className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </motion.div>
  );
};

export default Categories;
