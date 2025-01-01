"use client"
import { useState } from "react";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "What is the return policy?",
    answer:
      "You can return any product within 30 days of purchase. Ensure the product is unused and in its original packaging.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive an email with the tracking details.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, PayPal, and various other payment options depending on your location.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Absolutely! We use industry-standard encryption to ensure your data is safe with us.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-light-gray py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-indigo-600"
        >
          Frequently Asked Questions
        </motion.h2>
        <p className="text-center text-gray-600 mt-4">
          Have questions? We’ve got answers!
        </p>

        {/* FAQ List */}
        <div className="mt-10 space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <motion.h3
                className="text-lg font-medium text-dark-slate flex justify-between"
              >
                {faq.question}
                <span>
                  {activeIndex === index ? "-" : "+"}
                </span>
              </motion.h3>
              {activeIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 mt-2"
                >
                  {faq.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
