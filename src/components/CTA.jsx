import React from "react";

const CTA = () => {
  return (
    <section className="bg-gray-dark py-15">
      <div className="container mx-auto px-6">
        <div className="lg-max-width">
          <div className="flex justify-center">
            <div className="text-green flex items-center border border-gray rounded-2xl px-3 py-1">
              <span className="font-bold text-sm">Revolutionary</span>
            </div>
          </div>
          <h3 className="section-title">Enhance Your Design Workflow With Seamless Landing Pages</h3>
          <p className="section-desc">
           Join a community committed to safeguarding digital asets, empowering your financial journey with trust, innovation, and security
          </p>
        </div>
        <div className="flex justify-center mt-8">
            <button className="p-3 bg-green text-black">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
