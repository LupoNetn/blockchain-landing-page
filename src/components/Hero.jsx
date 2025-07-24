import React from "react";
import HeroImg from "../assets/hero-img.png";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="bg-black text-white pt-10 min-h-screen relative"
      >
        {/* Radial gradient background for large screens */}
        <div
          className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle at 10% 10%, #1e3a8a40 0%, #000000f2 60%)",
            opacity: 1,
          }}
        />
        <div className="relative z-10 container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="md:max-w-[500px] w-full">
              <div className="flex justify-center md:justify-start">
                <div className="text-green flex items-center border border-gray rounded-2xl px-3 py-1">
                  <span className="font-bold text-sm">Decentralised</span>
                </div>
              </div>
              <h1 className="text-4xl max-mb:text-3xl md:text-7xl md:text-left text-center font-medium mt-3 mb-3">
                Revolutionizing Web3 Finance
              </h1>
              <p className="hero-desc">
                Secure,Scalable, and decentralized solutions for your digital
                assets-experience the future of financial freedom
              </p>
              <div className="flex flex-col md:flex-row justify-center mt-6 md:space-x-4 space-y-2 md:space-y-0 md:justify-start">
                <button className="bg-green p-2 text-black cursor-pointer rounded-2xl w-full md:w-auto text-base md:text-lg">
                  Get Started
                </button>
                <button className="text-white text-center border border-gray rounded-2xl md:text-left p-2 cursor-pointer w-full md:w-auto text-base md:text-lg">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center md:max-w-[400px] w-full">
              <img
                src={HeroImg}
                alt=""
                className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
