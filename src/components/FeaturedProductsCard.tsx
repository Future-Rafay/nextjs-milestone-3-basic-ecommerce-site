"use client";

import Link from "next/link";
import { Products } from "@/lib/ApiData";
import Image from "next/image";

interface FeaturedProductsCardProps {
  product: Products;
}

const FeaturedProductsCard: React.FC<FeaturedProductsCardProps> = ({ product }) => {
  return (
    <div className="relative border p-4 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 hover:bg-emerald-50">
      <Link href={`/product/${product.id}`} className="flex flex-col items-center justify-between text-center">
        <div className="relative w-full mb-4 ">
          <Image
            src={product.image}
            alt={product.title}
            className="w-56 h-auto mx-auto object-cover rounded-md transition-transform duration-300 hover:scale-110"
            width={300}
            height={300}
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-200">
            {product.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{product.category}</p>
          <p className="text-lg font-bold text-indigo-600 mt-2">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export { FeaturedProductsCard };
