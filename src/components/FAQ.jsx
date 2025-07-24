import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqData = [
  {
    question: "What is blockchain technology?",
    answer:
      "Blockchain is a decentralized digital ledger that records transactions across many computers in a way that the registered transactions can't be altered retroactively.",
  },
  {
    question: "How does blockchain ensure security?",
    answer:
      "Blockchain uses cryptographic hashing, decentralized consensus, and data immutability to ensure secure and tamper-proof records.",
  },
  {
    question: "What is the difference between public and private blockchains?",
    answer:
      "Public blockchains are open to everyone and are decentralized, while private blockchains are permissioned and controlled by specific organizations.",
  },
  {
    question: "Can blockchain be hacked?",
    answer:
      "While no system is entirely hack-proof, blockchain’s decentralized and encrypted nature makes it significantly more secure than traditional systems.",
  },
  {
    question: "What are smart contracts?",
    answer:
      "Smart contracts are self-executing contracts with the terms directly written into code, running on the blockchain and automatically enforcing rules.",
  },
  {
    question: "Is blockchain only used for cryptocurrencies?",
    answer:
      "No. While it's the backbone of cryptocurrencies, blockchain is also used in supply chains, healthcare, finance, voting systems, and more.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-black py-15">
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #1e3a8a26 0%, #000000f2 30%)",
          opacity: 1,
        }}
      />
      <div className="relative z-10 mx-auto px-6">
        <div className="lg-max-width">
          <div className="flex justify-center">
            <div className="text-green flex items-center border border-gray rounded-2xl px-3 py-1">
              <span className="font-bold text-sm">FAQ</span>
            </div>
          </div>
          <h3 className="section-title">Get Answers To Common Questions</h3>
          <p className="section-desc">
            From basics to advanced topics, find everything you need to know
            right here, let us help you simplify the process and find the
            clarity you are looking for.
          </p>

          {/* Accordion */}
          <div className="mt-10 space-y-4 max-w-3xl mx-auto">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 text-left bg-black hover:bg-gray-800 transition duration-300"
                >
                  <span className="text-white font-medium text-base">
                    {item.question}
                  </span>
                  {openIndex === index ? (
                    <FiChevronUp className="text-green text-xl" />
                  ) : (
                    <FiChevronDown className="text-green text-xl" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-gray-950 text-gray text-sm leading-relaxed border-t border-gray-700">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
