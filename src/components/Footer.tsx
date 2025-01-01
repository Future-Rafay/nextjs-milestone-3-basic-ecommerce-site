"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    const socialIcons = [
        { name: "Facebook", url: "#", icon: <FaFacebook /> },
        { name: "Twitter", url: "#", icon: <FaTwitter /> },
        { name: "Instagram", url: "#", icon: <FaInstagram /> },
    ];

    return (
        <footer className="bg-indigo-600 text-white py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Name Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-center lg:text-left"
                    >
                        <h1 className="text-2xl font-semibold">E-Shop</h1>
                        <p className="text-sm my-2 text-gray-300">Your trusted partner in e-commerce</p>
                        {/* Follow Us Section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >

                            <div className="flex space-x-4">
                                {socialIcons.map((icon, index) => (
                                    <motion.a
                                        key={index}
                                        href={icon.url}
                                        whileHover={{ scale: 1.1 }}
                                        className="text-white hover:text-emerald-300"
                                    >
                                        {icon.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-lg font-semibold mb-4">Explore More</h3>
                        <ul>
                            <li><Link href="/" className="hover:text-emerald-300">Home</Link></li>
                            <li><Link href="/product" className="hover:text-emerald-300">Products </Link></li>
                            <li><Link href="/about" className="hover:text-emerald-300">About</Link></li>
                            <li> <Link href="/contact" className="hover:text-emerald-300">Contact</Link></li>
                        </ul>
                    </motion.div>

                    {/* Contact Info Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                        <ul>
                            <li>Email: support@eshop.com</li>
                            <li>Phone: +1 (800) 123-4567</li>
                            <li>Address: 123 E-Shop St, Commerce City, CO</li>
                        </ul>
                    </motion.div>



                    {/* Customer Service Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
                        <ul>
                            <li>Help Center</li>
                            <li>Track Your Order</li>
                            <li>Returns & Exchanges</li>
                            <li>Shipping Info</li>
                        </ul>
                    </motion.div>


                </div>

                {/* Footer Bottom Section */}
                <motion.div
                    className="mt-16 text-center text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <p>&copy; 2025 E-Shop. All rights reserved. Made by <Link href='https://my-portfolio-animated-abdul-rafays-projects-87eac4f7.vercel.app/' className="text-white underline underline-offset-2 hover:text-blue-300">Abdul Rafay</Link></p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
