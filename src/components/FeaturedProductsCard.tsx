"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Products } from "@/lib/ApiData";
import Image from "next/image";

interface FeaturedProductsCardProps {
  product: Products;
}

const FeaturedProductsCard: React.FC<FeaturedProductsCardProps> = ({ product }) => {
  return (
    <div className="relative border p-4 rounded-lg shadow-lg md:hover:shadow-xl">
      <Link href={`/product/${product.id}`} className="flex flex-col items-center justify-between text-center"

      >
        <motion.div className="relative w-full mb-4 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}

        >
          <motion.div
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.8 }}
          >
            <Image

              src={product.image}
              alt={product.title}
              className="w-[300px] h-[300px] mx-auto object-contain rounded-md"
              width={300}
              height={300}
            />
          </motion.div>
        </motion.div>
        <div>
          <h3 className="text-sm md:text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-200">
            {product.title}
          </h3>
          <p className="text-xs md:text-sm text-gray-500 mt-1">{product.category}</p>
          <p className="text-base md:text-lg font-bold text-indigo-600 mt-2">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export { FeaturedProductsCard };
