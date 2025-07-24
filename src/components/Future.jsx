import React from "react";
import connectivityImg from "../assets/connection.png";
import decentralizationImg from "../assets/hugeicons_blockchain-02.png";
import scalabilityImg from "../assets/material-symbols_security.png";
import futureImg from "../assets/future-img.png";

const futureItems = [
  {
    img: connectivityImg,
    head: "Connectivity & Ubiquity",
    desc: "Blockchain will seamlessly connect platforms and devices, making digital assets accessible everywhere.",
  },
  {
    img: scalabilityImg,
    head: "Secure Transactions",
    desc: "Future blockchains will enable faster, safer transactions, protecting users and data at every step.",
  },
  {
    img: decentralizationImg,
    head: "Blockchain & Decentralization",
    desc: "Decentralized networks will empower users, removing single points of control for true digital freedom.",
  },
];

const Future = () => {
  return (
    <section className="bg-gray-dark py-15 relative">
      {/* Subtle, centered radial gradient */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #1e3a8a26 0%, #00000080 30%)",
          opacity: 1,
        }}
      />
      <div className="relative z-10 container px-6 mx-auto">
        <div className="lg-max-width">
          <div className="flex justify-center">
            <div className="text-green flex items-center border border-gray rounded-2xl px-3 py-1">
              <span className="font-bold text-sm">features</span>
            </div>
          </div>
          <h3 className="section-title">The Future Of Blockchain Technology</h3>
          <p className="section-desc">
            Leading the way in blockchain innovation, We are redefining how the
            world connects, secures and transacts, bringing a new era of
            decentralized technology.
          </p>
        </div>
        <div className="md:flex md:justify-between md:items-center mt-10 gap-8">
          <div>
            <img src={futureImg} alt="future-img" />
          </div>
          <div>
            {futureItems.map(({ img, head, desc }, idx) => (
              <div
                key={idx}
                className="bg-black border border-gray rounded-xl p-6 flex flex-row items-start gap-5 text-center mb-4 max-w-[600px]"
              >
                <img
                  src={img}
                  alt={head}
                  className="w-8 h-8 mb-4 object-contain"
                />
                <div className="text-left">
                  <h4 className="text-green font-bold text-lg mb-2">{head}</h4>
                  <p className="text-gray text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;
