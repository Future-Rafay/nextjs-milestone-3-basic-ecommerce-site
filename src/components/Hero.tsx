// // components/Hero.tsx
// const Hero = () => {
//     return (
//       <section className="bg-gray-100 text-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center">
//           {/* Text Section */}
//           <div className="lg:w-1/2 text-center lg:text-left">
//             <h1 className="text-4xl font-bold text-indigo-600">
//               Welcome to E-Shop
//             </h1>
//             <p className="mt-4 text-gray-700 text-lg">
//               Discover the best deals on the latest products. Shop now and save big!
//             </p>
//             <div className="mt-6 space-x-4">
//               <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700">
//                 Shop Now
//               </button>
//               <button className="px-6 py-2 bg-gray-200 text-indigo-600 rounded-lg shadow-md hover:bg-gray-300">
//                 Learn More
//               </button>
//             </div>
//           </div>
  
//           {/* Image Section */}
//           <div className="lg:w-1/2">
//             <img
//               src="https://via.placeholder.com/600x400"
//               alt="Hero Image"
//               className="rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default Hero;

"use client";

import { motion } from "framer-motion";
import { FaShoppingCart, FaInfoCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center">
        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold text-white leading-tight">
            Welcome to E-Shop
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Discover exclusive deals on top-rated products. Shop now and enjoy
            amazing discounts!
          </p>
          <div className="mt-8 space-x-4 flex justify-center lg:justify-start">
            <motion.button
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaShoppingCart className="mr-2" />
              Shop Now
            </motion.button>
            <motion.button
              className="px-8 py-3 bg-gray-200 text-indigo-600 rounded-lg shadow-md hover:bg-gray-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaInfoCircle className="mr-2" />
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="lg:w-1/2 mt-8 lg:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src="https://via.placeholder.com/600x400"
            alt="Hero Image"
            className="rounded-lg shadow-xl transform hover:scale-105 transition-transform"
          />
        </motion.div>
      </div>

      {/* Featured Categories Section */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2 className="text-3xl font-semibold text-white">Explore Our Categories</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
            <h3 className="text-xl font-bold text-indigo-600">Electronics</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
            <h3 className="text-xl font-bold text-indigo-600">Fashion</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
            <h3 className="text-xl font-bold text-indigo-600">Home Appliances</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
            <h3 className="text-xl font-bold text-indigo-600">Beauty & Health</h3>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

  