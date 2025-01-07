"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Categories from "@/components/Category";

const CategorySection = () => {
  const categories = [
    {
      name: "Electronics",
      description: "Latest gadgets and devices.",
      image: "/images/category/electronics.webp",
      link: "/electronics",
    },
    {
      name: "Men's Clothing",
      description: "Stylish and comfortable wear.",
      image: "/images/category/mensClothing.webp",
      link: "/mens-clothing",
    },
    {
      name: "Women's Clothing",
      description: "Trendy and elegant outfits.",
      image: "/images/category/womensClothing.webp",
      link: "/womens-clothing",
    },
    {
      name: "Jewelry",
      description: "Exquisite pieces to shine.",
      image: "/images/category/jewelery.webp",
      link: "/jewelry",
    },
  ];

  return (
    <motion.div
      className="my-16 mx-4 lg:mx-16 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Section Heading */}
      <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight text-center">
        Browse Our <span className="text-secondary">Categories</span>
      </h2>
      <Categories />
      {/* Category Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2  gap-6 lg:gap-8 px-2 lg:px-8">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative bg-neutral-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-transform"
          >
            {/* Background Image */}
            <img
              src={category.image}
              alt={category.name}
              className="w-[400px] h-[400px] object-contain mx-auto"
            />

            {/* Content */}
            <div className="absolute bottom-0 p-6 text-left text-white bg-gradient-to-b from-black">
              <h3 className="text-xl lg:text-2xl font-bold">{category.name}</h3>
              <p className="text-xs lg:text-sm mt-2">{category.description}</p>
              <Link href={`/category/${category.link.toLowerCase()}`}>
                <button className="mt-4 px-3 lg:px-4 py-2 bg-primary rounded-lg text-xs lg:text-sm font-semibold">
                  Explore
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CategorySection;
