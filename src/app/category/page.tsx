"use client"

import Link from 'next/link';
import { motion } from 'framer-motion';

const CategorySection = () => {
  return (
    <motion.div
      className="mt-16 mx-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <h2 className="text-3xl font-semibold text-primary-foreground">Explore Our Categories</h2>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <Link href="/category/electronics">
          <div className="bg-neutral-100 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition cursor-pointer">
            <h3 className="text-xl font-bold text-primary">Electronics</h3>
          </div>
        </Link>

        <Link href="/category/mens-clothing">
          <div className="bg-neutral-100 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition cursor-pointer">
            <h3 className="text-xl font-bold text-primary">Men&#39;s Clothing</h3>
          </div>
        </Link>

        <Link href="/category/womens-clothing">
          <div className="bg-neutral-100 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition cursor-pointer">
            <h3 className="text-xl font-bold text-primary">Women&#39;s Clothing</h3>
          </div>
        </Link>

        <Link href="/category/jewelry">
          <div className="bg-neutral-100 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition cursor-pointer">
            <h3 className="text-xl font-bold text-primary">Jewelry</h3>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default CategorySection;

