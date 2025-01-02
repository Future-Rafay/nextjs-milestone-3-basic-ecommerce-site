"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer",
    image: "/images/rafay.jpg",
    testimonial:
      "This is the best e-commerce platform I have ever used. The UI is seamless, and the product quality is outstanding!",
  },
  {
    name: "Jane Smith",
    role: "Digital Marketer",
    image: "/images/rafay.jpg",
    testimonial:
      "Excellent customer service and a user-friendly interface. I love the ease of shopping here!",
  },
  {
    name: "Robert Brown",
    role: "Entrepreneur",
    image: "/images/rafay.jpg",
    testimonial:
      "The range of products available is incredible. The website is intuitive and very responsive!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-light-gray py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-indigo-600"
        >
          What Our Customers Say
        </motion.h2>
        <p className="text-center text-dark-slate mt-4 max-w-2xl mx-auto">
          Here’s what some of our happy customers have to say about our platform.
        </p>

        {/* Testimonials Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-lg p-6"
            >
              {/* Profile Picture */}
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto"
                width={80} 
                height={80}
              />
              {/* Name and Role */}
              <h3 className="text-xl font-semibold text-center mt-4 text-dark-slate">
                {testimonial.name}
              </h3>
              <p className="text-center text-gray-500">{testimonial.role}</p>
              {/* Testimonial */}
              <p className="mt-6 text-center text-gray-700 italic">
              &#34;{testimonial.testimonial}&#34;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
