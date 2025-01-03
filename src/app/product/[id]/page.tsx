"use client";

import { SingleProduct, Products, addToCart, removeFromWishlist, addToWishlist, getWishlist } from '@/lib/ApiData';
import Image from 'next/image';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import NotFound from '@/app/not-found';
import { useState, useEffect } from 'react';

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [product, setProduct] = useState<Products | null>(null);
  const [isInWishlist, setIsInWishlist] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true); // Set loading to true when the data fetch starts
        const fetchedProduct = await SingleProduct(Number(id));
        setProduct(fetchedProduct);
        setIsInWishlist(getWishlist().includes(fetchedProduct.id));
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false); // Set loading to false once the data is fetched
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        {/* Loading Spinner */}
        <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return <NotFound />;
  }

  const handleWishlistClick = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
      setIsInWishlist(false);
    } else {
      addToWishlist(product.id);
      setIsInWishlist(true);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      itemCount: 1,
      size: "",
      color: "",
      rate: 0,
    });
  };

  return (
    <div className="container mx-auto p-6">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Product Image */}
        <div className="flex justify-center">
          <Image
            src={product.image}
            alt={product.title}
            className="rounded-lg object-contain shadow-xl hover:scale-105 transition-transform"
            width={500}
            height={600}
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-900">{product.title}</h1>
          <p className="text-xl font-bold text-indigo-600">${product.price}</p>

          {/* Description */}
          <p className="text-sm md:text-lg text-gray-700 mt-4">{product.description}</p>

          {/* Category and Rating */}
          <div className="text-sm text-gray-500 space-y-2">
            <p>Category: <span className="font-semibold text-gray-700">{product.category}</span></p>
            <p>Rating: <span className="font-semibold text-yellow-400">{product.rating.rate}</span> ({product.rating.count} reviews)</p>
          </div>

          <div className="border-t pt-4 text-gray-600 space-y-3">
            <h3 className="text-lg font-semibold">Product Specifications</h3>
            <ul className="list-disc pl-6">
              <li>Size: Medium</li>
              <li>Color: Black</li>
              <li>Weight: 1.2 kg</li>
            </ul>
          </div>

          <div className='flex gap-0 md:gap-3 flex-col sm:flex-row'>
            {/* Add to Cart Button */}
            <div className="mt-3  md:mt-6 w-full sm:w-auto">
              <motion.button
                className="px-4 py-2 md:px-8 md:py-3 bg-primary text-primary-foreground rounded-lg shadow-md hover:bg-accent flex items-center space-x-2 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={handleAddToCart}
              >
                <FaShoppingCart />
                <span>Add to Cart</span>
              </motion.button>
            </div>
            {/* Add to WishList Button */}
            <div className="mt-3  md:mt-6 w-full sm:w-auto">
              <motion.button
                className={`px-4 py-2 md:px-8 md:py-3 rounded-lg shadow-md flex items-center space-x-2 w-full sm:w-auto 
                 ${isInWishlist ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-secondary text-secondary-foreground hover:bg-accent-foreground'}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={handleWishlistClick}
              >
                {isInWishlist ? (
                  <FaHeart />
                ) : (
                  <FaRegHeart />
                )}
                <span>{isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetailPage;
