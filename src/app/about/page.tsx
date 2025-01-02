"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaHandshake, FaChartLine, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testmonials";
import Image from "next/image";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "CEO",
    image: "/images/rafay.jpg",
  },
  {
    name: "Bob Smith",
    role: "CTO",
    image: "/images/rafay.jpg",
  },
  {
    name: "Carol Danvers",
    role: "Lead Designer",
    image: "/images/rafay.jpg",
  },
  {
    name: "Daniel Green",
    role: "Marketing Head",
    image: "/images/rafay.jpg",
  },
];

const AboutPage = () => {
  return (
    <main className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <motion.section
        className="bg-indigo-600 text-white py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <motion.p
            className="mt-4 text-lg"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Welcome to E-Shop, your trusted partner in the e-commerce world.
          </motion.p>
        </div>
      </motion.section>

      {/* Company Info */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-indigo-600 text-center">
          Our Mission
        </h2>
        <p className="mt-4 text-center text-gray-700 text-lg">
          We aim to provide quality products and unparalleled shopping
          experiences while empowering our customers with cutting-edge
          technology and innovation.
        </p>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <h2 className="text-3xl font-bold text-indigo-600 text-center">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="text-center">
                <CardHeader>
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-24 h-24 mx-auto"
                    width={96}
                    height={96}
                  />
                  <CardTitle className="mt-4">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>{member.role}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section
        className="bg-gray-50 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-indigo-600">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <FaHandshake className="text-indigo-600 text-4xl" />
              <h3 className="text-xl font-bold text-indigo-600 mt-4">Quality</h3>
              <p className="mt-2 text-gray-700">
                We commit to offering only the highest quality products and
                services to ensure customer satisfaction.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <FaChartLine className="text-indigo-600 text-4xl" />
              <h3 className="text-xl font-bold text-indigo-600 mt-4">Innovation</h3>
              <p className="mt-2 text-gray-700">
                We embrace innovation, continuously pushing the boundaries to
                create the best shopping experience possible.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <FaCogs className="text-indigo-600 text-4xl" />
              <h3 className="text-xl font-bold text-indigo-600 mt-4">Integrity</h3>
              <p className="mt-2 text-gray-700">
                We believe in operating with transparency, honesty, and trust to
                foster long-lasting relationships with our customers.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Testimonials />

      {/* Newsletter Subscription Section */}
      <motion.section
        className="bg-gray-600 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white">Subscribe to Our Newsletter</h2>
          <p className="mt-4 text-lg text-white">
            Stay up-to-date with the latest news, offers, and updates from E-Shop. Sign up for our newsletter!
          </p>

          {/* Newsletter Form */}
          <form className="mt-6 flex justify-center items-center space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full w-72 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <motion.button
              type="submit"
              className="bg-white text-indigo-600 px-6 py-3 rounded-full"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </motion.section>

    </main>
  );
};

export default AboutPage;
