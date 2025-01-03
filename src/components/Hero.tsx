// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { FaShoppingCart, FaInfoCircle } from "react-icons/fa";

// const Hero = () => {
//   return (
//     <section className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white py-16">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center">
//         {/* Text Section */}
//         <motion.div
//           className="lg:w-1/2 text-center lg:text-left"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-5xl font-extrabold text-white leading-tight">
//           Welcome to VividCart!
//           </h1>
//           <p className="mt-4 text-lg text-gray-200">
//           Discover a world of vibrant choices for every style, need, and occasion.  
//           </p>
//           <div className="mt-8 space-x-4 flex justify-center lg:justify-start">
//             <motion.button
//               className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 flex items-center"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <FaShoppingCart className="mr-2" />
//               Shop Now
//             </motion.button>
//             <motion.button
//               className="px-8 py-3 bg-gray-200 text-indigo-600 rounded-lg shadow-md hover:bg-gray-300 flex items-center"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <FaInfoCircle className="mr-2" />
//               Explore Categories
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Image Section */}
//         <motion.div
//           className="lg:w-1/2 mt-8 lg:mt-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           <Image
//             src="/images/rafay.jpg"
//             alt="Hero Image"
//             className="rounded-lg shadow-xl transform hover:scale-105 transition-transform"
//             width={400}
//             height={400}
//           />
//         </motion.div>
//       </div>

//       {/* Featured Categories Section */}
//       <motion.div
//         className="mt-16 text-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 1 }}
//       >
//         <h2 className="text-3xl font-semibold text-white">Explore Our Categories</h2>
//         <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
//             <h3 className="text-xl font-bold text-indigo-600">Electronics</h3>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
//             <h3 className="text-xl font-bold text-indigo-600">Fashion</h3>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
//             <h3 className="text-xl font-bold text-indigo-600">Home Appliances</h3>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
//             <h3 className="text-xl font-bold text-indigo-600">Beauty & Health</h3>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;

  
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaShoppingCart, FaInfoCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center">
        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold text-primary-foreground leading-tight">
            Welcome to VividCart!
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Discover a world of vibrant choices for every style, need, and occasion.
          </p>
          <div className="mt-8 space-x-4 flex justify-center lg:justify-start">
            <motion.button
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg shadow-md hover:bg-indigo-600 flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaShoppingCart className="mr-2" />
              Shop Now
            </motion.button>
            <motion.button
              className="px-8 py-3 bg-neutral-100 text-primary rounded-lg shadow-md hover:bg-neutral-200 flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaInfoCircle className="mr-2" />
              Explore Categories
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
          <Image
            src="/images/rafay.jpg"
            alt="Hero Image"
            className="rounded-lg shadow-xl transform hover:scale-105 transition-transform"
            width={400}
            height={400}
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
        <h2 className="text-3xl font-semibold text-primary-foreground">Explore Our Categories</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-neutral-100 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
            <h3 className="text-xl font-bold text-primary">Electronics</h3>
          </div>
          <div className="bg-neutral-100 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
            <h3 className="text-xl font-bold text-primary">Mens Clothing</h3>
          </div>
          <div className="bg-neutral-100 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
            <h3 className="text-xl font-bold text-primary">Women Clothing</h3>
          </div>
          <div className="bg-neutral-100 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
            <h3 className="text-xl font-bold text-primary">Jewllary</h3>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
