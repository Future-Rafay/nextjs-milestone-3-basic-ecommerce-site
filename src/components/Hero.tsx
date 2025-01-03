"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-primary-foreground text-primary py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center">
        
        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-indigo-600">
            Welcome to <span className="text-indigo-800">VividCart</span>!
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-md mx-auto lg:mx-0">
            Discover a world of vibrant choices for every style, need, and occasion. Shop now to elevate your shopping experience!
          </p>
          
          <div className="mt-8 space-x-4 flex justify-center lg:justify-start">
            <Link href="/product">
              <motion.button
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaShoppingCart className="mr-2" />
                Shop Now
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="lg:w-1/2 mt-8 lg:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/svgs/intro.svg"
            alt="Hero Image"
            className="rounded-lg shadow-xl transform hover:scale-105 transition-transform"
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
