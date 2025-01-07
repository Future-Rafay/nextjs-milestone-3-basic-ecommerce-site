"use client";

import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactPage = () => {
  return (
    <main className="bg-primary-foreground text-gray-800 border-x-2 border-primary">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="py-16 text-center"
      >
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-primary font-bold mb-4">Let&apos;s Connect! 🤝</h1>
        <p className="mt-4 text-base md:text-xl text-gray-600">We&apos;d love to hear from you! Drop us a message and we&apos;ll get back to you ASAP! 📨</p>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto px-6 py-12 bg-white shadow-2xl rounded-xl space-y-6 mt-10"
      >
        <h2 className="text-3xl font-semibold text-center text-primary mb-8">Contact Us 📬</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg border border-sec-text-secondary-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg border border-sec-text-secondary-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <textarea
            rows={6}
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded-lg border border-sec-text-secondary-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.1 }}
            type="submit"
            className="px-6 py-3 bg-emerald-500 text-white rounded-lg shadow-lg hover:bg-emerald-600"
          >
            Send Message 📩
          </motion.button>
        </form>
      </motion.section>

      {/* FAQ Section */}
      <FAQ />

      {/* Social Media Links */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-accent-foreground text-white py-12 text-center"
      >
        <h2 className="text-3xl font-semibold">Follow Us</h2>
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground hover:text-white"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground hover:text-white"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground hover:text-white"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </motion.section>
    </main>
  );
};

export default ContactPage;

