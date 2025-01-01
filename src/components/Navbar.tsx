"use client"

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/"className="text-xl font-bold">E-Shop </Link>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-emerald-300">Home</Link>
            <Link href="/product" className="hover:text-emerald-300">Products </Link>
            <Link href="/about" className="hover:text-emerald-300">About</Link>
            <Link href="/contact" className="hover:text-emerald-300">Contact</Link>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              <span className="material-icons">menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden space-y-2 mt-2">
            <Link href="/"
               className="block hover:bg-emerald-500 px-3 py-2 rounded">Home
            </Link>
            <Link href="/products"
               className="block hover:bg-emerald-500 px-3 py-2 rounded">Products
            </Link>
            <Link href="/about"
              className="block hover:bg-emerald-500 px-3 py-2 rounded">About
            </Link>
            <Link href="/contact"
              className="block hover:bg-emerald-500 px-3 py-2 rounded">Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
