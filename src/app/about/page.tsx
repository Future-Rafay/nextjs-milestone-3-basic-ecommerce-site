"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaHandshake, FaChartLine, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testmonials";
import Image from "next/image";

const teamMembers = [
  {
    name: "Emily Johnson",
    role: "CEO",
    image: "/images/emily.jpg",
  },
  {
    name: "Jimmy Smith",
    role: "CTO",
    image: "/images/jimmy.jpg",
  },
  {
    name: "Jeff Bezos",
    role: "Lead Designer",
    image: "/images/carl.jpg",
  },
  {
    name: "Sophie Danial",
    role: "Marketing Head",
    image: "/images/sophie.jpg",
  },
];

const AboutPage = () => {
  return (
    <main className="bg-primary-foreground  border-x-2 border-primary">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-primary-foreground py-12 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            About VividCart
          </h1>
          <motion.p
            className="mt-4 text-lg sm:text-xl"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Welcome to VividCart, your go-to destination for vibrant choices in electronics, jewelry, and fashion.
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
        <h2 className="text-3xl font-bold text-primary text-center">Our Mission</h2>
        <p className="mt-4 text-center text-lg text-gray-700">
          At VividCart, we aim to provide high-quality products in electronics, jewelry, men's clothing, and women's clothing,
          creating a dynamic and seamless shopping experience for all.
        </p>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <h2 className="text-3xl font-bold text-primary text-center">Meet the Team</h2>
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
                </CardHeader>
                <CardTitle className="mb-2">{member.name}</CardTitle>
                <CardContent>{member.role}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section
        className="bg-neutral-background py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-primary-text-primary-foreground rounded-lg shadow hover:shadow-lg transition"
            >
              <FaHandshake className="text-primary text-4xl" />
              <h3 className="text-xl font-bold text-primary mt-4">Quality</h3>
              <p className="mt-2 text-gray-700">
                We commit to offering only the highest quality products and services to ensure customer satisfaction.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-primary-text-primary-foreground rounded-lg shadow hover:shadow-lg transition"
            >
              <FaChartLine className="text-primary text-4xl" />
              <h3 className="text-xl font-bold text-primary mt-4">Innovation</h3>
              <p className="mt-2 text-gray-700">
                We embrace innovation, continuously pushing the boundaries to create the best shopping experience possible.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-primary-text-primary-foreground rounded-lg shadow hover:shadow-lg transition"
            >
              <FaCogs className="text-primary text-4xl" />
              <h3 className="text-xl font-bold text-primary mt-4">Integrity</h3>
              <p className="mt-2 text-gray-700">
                We believe in operating with transparency, honesty, and trust to foster long-lasting relationships with our customers.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Testimonials />

      {/* Newsletter Subscription Section */}
      <motion.section
        className="bg-gray-900 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground">Subscribe to Our Newsletter</h2>
          <p className="mt-4 text-lg text-primary-foreground">
            Stay up-to-date with the latest news, offers, and updates from VividCart. Sign up for our newsletter!
          </p>

          {/* Newsletter Form */}
          <form className="mt-6 flex justify-center items-center space-x-4 flex-wrap">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 text-gray-700 rounded-full w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <motion.button
              type="submit"
              className="bg-primary-foreground text-gray-700 px-6 py-3 rounded-full w-full sm:w-auto mt-4 sm:mt-0 sm:ml-4"
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
