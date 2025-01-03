"use client"

import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineHeart } from 'react-icons/ai';  // Wishlist Icon
import { BsFillCartFill } from 'react-icons/bs';  // Cart Icon
import { FaHome, FaInfoCircle, FaPhoneAlt, FaProductHunt } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Vivid <span className="text-secondary">Cart</span> {/* Applying the secondary color to Cart */}
            </Link>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-secondary">{/* Updated hover color */}
              Home
            </Link>
            <Link href="/product" className="hover:text-secondary">
              Products
            </Link>
            <Link href="/about" className="hover:text-secondary">
              About
            </Link>
            <Link href="/contact" className="hover:text-secondary">
              Contact
            </Link>
          </div>

          {/* Wishlist and Cart Icons */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/wishlist">
              <AiOutlineHeart size={24} className="hover:text-secondary cursor-pointer" />
            </Link>
            <Link href="/cart">
              <BsFillCartFill size={24} className="hover:text-secondary cursor-pointer" />
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none text-primary-foreground"
            >
              <span className="material-icons font-sans"> <MdMenu size={28} /></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-primary p-4 rounded-lg shadow-lg border-primary-foreground border">
            {/* Menu Items with React Icons */}
            <div className="flex flex-col space-y-3">
              <Link href="/" className="flex items-center space-x-2 hover:bg-secondary px-3 py-2 rounded text-primary-foreground">
                <FaHome size={20} />
                <span>Home</span>
              </Link>
              <Link href="/product" className="flex items-center space-x-2 hover:bg-secondary px-3 py-2 rounded text-primary-foreground">
                <FaProductHunt size={20} />
                <span>Products</span>
              </Link>
              <Link href="/about" className="flex items-center space-x-2 hover:bg-secondary px-3 py-2 rounded text-primary-foreground">
                <FaInfoCircle size={20} />
                <span>About</span>
              </Link>
              <Link href="/contact" className="flex items-center space-x-2 hover:bg-secondary px-3 py-2 rounded text-primary-foreground">
                <FaPhoneAlt size={20} />
                <span>Contact</span>
              </Link>
              <Link href="/wishlist" className="flex items-center space-x-2 hover:bg-secondary px-3 py-2 rounded text-primary-foreground">
                <AiOutlineHeart size={20} />
                <span>Wishlist</span>
              </Link>
              <Link href="/cart" className="flex items-center space-x-2 hover:bg-secondary px-3 py-2 rounded text-primary-foreground">
                <BsFillCartFill size={20} />
                <span>Cart</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


