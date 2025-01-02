"use client"

// import Link from 'next/link';
// import { Products } from '@/lib/ApiData';
// import { toast } from 'react-toastify';
// import { FaShoppingCart, FaHeart } from 'react-icons/fa'; // Import icons

// interface ProductCardProps {
//   product: Products;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

//   // Handle add to cart
//   const handleAddToCart = (e: React.MouseEvent) => {
//     e.preventDefault();
//     toast.success(`Product added to Cart!`, {
//       autoClose: 3000,
//       hideProgressBar: true,
//     });
//   };

//   // Handle add to wishlist
//   const handleAddToWishlist = (e: React.MouseEvent) => {

//     e.preventDefault();
//     toast.info(`Product added to Wishlist!`, {
//       autoClose: 3000,
//       hideProgressBar: true,
//     });
//   };

//   return (
//     <div className="relative group border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-indigo-50">
//       <Link href={`/product/${product.id}`} className="w-full h-full">
//         <div className="flex flex-col items-center w-full h-full justify-between">
//           <div>
//             <div className="relative w-full mb-4">
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-auto object-cover rounded-md transition-transform duration-300 group-hover:scale-110 "
//               />
//             </div>
//             <div className="text-center">
//               <h2 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-200">
//                 {product.title}
//               </h2>
//               <p className="text-sm text-gray-500 mt-2">{product.category}</p>
//               <p className="text-lg font-bold text-indigo-600 mt-2">${product.price}</p>
//             </div>
//           </div>
//           <div className="flex w-full items-center justify-between px-4">
//             <button
//               className="flex items-center bg-indigo-500 text-white py-2 px-4 rounded-md text-sm font-medium shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
//               onClick={handleAddToCart}
//             >
//               <FaShoppingCart className="w-8 h-8" />
//             </button>
//             <button
//               className="flex items-center justify-center bg-emerald-400 text-white py-2 px-4 rounded-md text-sm font-medium shadow-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200"
//               onClick={handleAddToWishlist}
//             >
//               <FaHeart className="w-8 h-8" />
//             </button>
//           </div>
//         </div>
//       </Link>

//     </div>
//   );
// };

// export { ProductCard };

import Link from 'next/link';
import { addToCart, addToWishlist, getWishlist, Products, removeFromWishlist } from '@/lib/ApiData';
import { FaHeart, FaRegHeart } from 'react-icons/fa';  // Importing heart icons for add/remove wishlist
import { useState } from 'react';

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
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <Link href={`/product/${product.id}`}>
        <div className="flex flex-col items-center w-full h-full justify-evenly">
          <img src={product.image} alt={product.title} className="w-full h-auto object-cover rounded-md mb-4" />
          <div>
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="text-lg font-bold text-indigo-600 mt-2">${product.price}</p>
          </div>
        </div>
      </Link>

      <div className="flex justify-between items-center mt-4">
        <button 
          onClick={handleWishlistClick}
          className="text-red-600 hover:text-red-700 transition duration-300"
        >
          {isInWishlist ? (
            <FaHeart size={24} />
          ) : (
            <FaRegHeart size={24} />
          )}
        </button>

        <button
        onClick={handleAddToCart}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export { ProductCard };
