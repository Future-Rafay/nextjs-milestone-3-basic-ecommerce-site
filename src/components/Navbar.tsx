"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { MdMenu, MdClose } from "react-icons/md";
import { FaHome, FaInfoCircle, FaPhoneAlt, FaProductHunt } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <nav className="bg-primary shadow-lg text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          >
            <div className="bg-primary-foreground p-2 rounded-full shadow-md">
              <span className="text-primary text-lg font-bold">VC</span>
            </div>
            <Link href="/" className="text-2xl font-bold">
              <span className="text-white">Vivid</span>{" "}
              <span className="text-secondary">Cart</span>
            </Link>
          </motion.div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-lg font-medium hover:text-secondary transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/product"
              className="text-lg font-medium hover:text-secondary transition duration-300"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium hover:text-secondary transition duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium hover:text-secondary transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Wishlist and Cart Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <Link href="/wishlist">
                <AiOutlineHeart size={24} className="hover:text-secondary" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <Link href="/cart">
                <BsFillCartFill size={24} className="hover:text-secondary" />
              </Link>
            </motion.div>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none text-primary-foreground"
            >
              {isMenuOpen ? (
                <MdClose size={28} />
              ) : (
                <MdMenu size={28} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden mt-2 bg-primary p-4 rounded-lg shadow-lg"
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-lg flex items-center space-x-2 hover:bg-secondary px-4 py-2 rounded-lg text-primary-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <FaHome size={20} />
                <span>Home</span>
              </Link>
              <Link
                href="/product"
                className="text-lg flex items-center space-x-2 hover:bg-secondary px-4 py-2 rounded-lg text-primary-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <FaProductHunt size={20} />
                <span>Products</span>
              </Link>
              <Link
                href="/about"
                className="text-lg flex items-center space-x-2 hover:bg-secondary px-4 py-2 rounded-lg text-primary-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <FaInfoCircle size={20} />
                <span>About</span>
              </Link>
              <Link
                href="/contact"
                className="text-lg flex items-center space-x-2 hover:bg-secondary px-4 py-2 rounded-lg text-primary-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <FaPhoneAlt size={20} />
                <span>Contact</span>
              </Link>
              <Link
                href="/wishlist"
                className="text-lg flex items-center space-x-2 hover:bg-secondary px-4 py-2 rounded-lg text-primary-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <AiOutlineHeart size={20} />  
                <span>Wishlist</span>
              </Link>
              <Link
                href="/cart"
                className="text-lg flex items-center space-x-2 hover:bg-secondary px-4 py-2 rounded-lg text-primary-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <BsFillCartFill size={20} />
                <span>Cart</span>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;



