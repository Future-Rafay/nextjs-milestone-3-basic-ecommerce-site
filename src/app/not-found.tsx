"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-light-gray text-dark-slate p-6">
      {/* Animated 404 Header with bounce effect */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="text-8xl font-bold text-indigo-600"
      >
        404
      </motion.h1>

      {/* Animated Subtitle with fade-in effect */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-2xl mt-4"
      >
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </motion.h2>

      {/* Suggested Links with staggered animations */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center mt-4 text-gray-600 max-w-2xl"
      >
        The page you are trying to access might have been moved, deleted, or is temporarily unavailable. Here are some helpful links:
      </motion.p>

      <ul className="mt-6 space-y-4">
        <motion.li
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/" className="text-indigo-600 underline">
            Go to Home Page
          </Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/about" className="text-indigo-600 underline">
            Learn About Us
          </Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/contact" className="text-indigo-600 underline">
            Contact Support
          </Link>
        </motion.li>
      </ul>

    </div>
  );
};

export default NotFound;
