"use client"

import Link from "next/link";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-light-gray text-dark-slate p-6">
      {/* Animated 404 Header */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-8xl font-bold text-indigo-600"
      >
        404
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-2xl mt-4"
      >
        Oops! The page you're looking for doesn't exist.
      </motion.h2>

      {/* Suggested Links */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center mt-4 text-gray-600 max-w-2xl"
      >
        The page you are trying to access might have been moved, deleted, or is temporarily unavailable. Here are some helpful links:
      </motion.p>

      <ul className="mt-6 space-y-4">
        <li>
          <Link href="/" passHref>
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="text-indigo-600 underline"
            >
              Go to Home Page
            </motion.a>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="text-indigo-600 underline"
            >
              Learn About Us
            </motion.a>
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="text-indigo-600 underline"
            >
              Contact Support
            </motion.a>
          </Link>
        </li>
      </ul>

      {/* Image or Illustration */}
      <motion.img
        src="https://via.placeholder.com/500x300?text=404+Illustration"
        alt="404 Illustration"
        className="mt-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      />
    </div>
  );
};

export default NotFound;
