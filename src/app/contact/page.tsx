"use client"
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";

const ContactPage = () => {


  return (
    <main className="bg-gray-100 text-gray-900">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-indigo-600 text-white py-12 text-center"
      >
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="mt-4">We would love to hear from you. Feel free to reach out!</p>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <h2 className="text-3xl font-bold text-indigo-600 text-center mb-8">
          Contact Us
        </h2>
        <form className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <textarea
            rows={6}
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-600"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.1 }}
            type="submit"
            className="px-6 py-3 bg-emerald-500 text-white rounded-lg shadow-lg hover:bg-emerald-600"
          >
            Send Message
          </motion.button>
        </form>
      </motion.section>

      {/* Contact Info */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 py-12 text-center"
      >
        <h2 className="text-3xl font-bold text-indigo-600">Our Address</h2>
        <p className="mt-4 text-gray-700">123 E-Commerce Street, Cityville</p>
        <p className="text-gray-700">Phone: +123 456 7890</p>
        <p className="text-gray-700">Email: support@eshop.com</p>

        <div className="mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.947173175858!2d-122.0842496846915!3d37.42199997982543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c2f1b1b6d%3A0xeab736a0e18f3bc0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1635706253601!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            // allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </motion.section>

    <FAQ />
      {/* Social Media Links */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 text-white py-12 text-center"
      >
        <h2 className="text-3xl font-bold">Follow Us</h2>
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </motion.section>
    </main>
  );
};

export default ContactPage;
