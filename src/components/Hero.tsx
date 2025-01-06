"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-primary-foreground pb-20 md:py-10 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center space-y-8 lg:space-y-0">
        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-primary">
            Step Into <span className="text-indigo-800">VividCart</span>!
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-md mx-auto lg:mx-0">
            Your one-stop destination for lively, handpicked products that match your lifestyle. Let’s make every purchase count!
          </p>

          <div className="mt-8 space-x-4 flex justify-center lg:justify-start">
            <Link href="/product">
              <motion.button
                className="px-8 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-indigo-700 flex items-center"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <FaShoppingBag className="mr-2" />
                Explore Now
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="w-full max-w-sm lg:max-w-md transform perspective-1000"
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/hero.png"
              alt="Hero Image"
              className="rounded-lg backface-hidden"
              width={500}
              height={500}
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
