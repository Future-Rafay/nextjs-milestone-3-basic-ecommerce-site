"use client"

import Link from 'next/link';
import { addToCart, addToWishlist, getWishlist, Products, removeFromWishlist } from '@/lib/ApiData';
import { FaShoppingCart, FaHeart, FaRegHeart } from 'react-icons/fa'; // Import icons
import { useState } from 'react';
import Image from 'next/image';


interface ProductCardProps {
  product: Products;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  const [isInWishlist, setIsInWishlist] = useState<boolean>(getWishlist().includes(product.id));

  const handleWishlistClick = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id); // If product is in wishlist, remove it
      setIsInWishlist(false);
    } else {
      addToWishlist(product.id); // If product is not in wishlist, add it
      setIsInWishlist(true);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      itemCount: 1, // Default quantity
      size: "", // Default size (optional)
      color: "", // Default color (optional)
      rate: 0, // Default rate, or set this value appropriately
    });
  };

  return (
    <div className="relative group border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-indigo-50">
      <div className="flex flex-col items-center w-full h-full justify-between">
        <Link href={`/product/${product.id}`} className="w-full h-full">
          <div>
            <div className="relative w-full mb-4">
              <Image
                src={product.image}
                alt={product.title}
                className="w-[300px] h-[300px] m-auto object-contain rounded-md transition-transform duration-300 group-hover:scale-105 "
                width={300}
                height={300}  
                priority
              />
            </div>
            <div className="text-center mt-8  ">
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-200">
                {product.title}
              </h2>
              <p className=" text-xs md:text-sm text-gray-500 mt-2">{product.category}</p>
              <p className="text-sm md:text-lg font-bold text-indigo-600 mt-2">${product.price}</p>
            </div>
          </div>
        </Link>
        <div className="flex w-full items-center justify-between mt-4">
          <button
            className="flex items-center  bg-indigo-500 text-white py-2 px-4 md:px-6 md:py-3 rounded-md text-sm font-medium shadow-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            onClick={handleAddToCart}
          >
           <FaShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8" />
          </button>
          <button
            className={`px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-md flex items-center space-x-2 sm:w-auto 
              ${isInWishlist ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-secondary text-secondary-foreground hover:bg-accent-foreground'}`}
            onClick={handleWishlistClick}
          >
            {isInWishlist ? (
              <FaHeart className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8"/>
            ) : (
              <FaRegHeart className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8"/>
            )}
            {/* <span>{isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}</span> */}
          </button>

        </div>
      </div>


    </div>
  );
};

export { ProductCard };

