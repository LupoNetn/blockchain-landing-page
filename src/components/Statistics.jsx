import React from "react";

const statistics = [
  { num: "2M", desc: "Users" },
  { num: "500K", desc: "Transactions" },
  { num: "35+", desc: "countries" },
];

const Statistics = () => {
  return (
    <section className="bg-gray-dark py-15">
      <div className="container px-6 mx-auto">
        <div className="lg-max-width">
          <div className="flex justify-center">
            <div className="text-green flex items-center border border-gray rounded-2xl px-3 py-1">
              <span className="font-bold text-sm">statistics</span>
            </div>
          </div>
          <h3 className="section-title">Completely Leverage Product</h3>
          <p className="section-desc">
            Loading the way in blockchain innovation, We are redefinning how the
            world connects,secures and transacts,bringing a new era of
            decentralized technology.
          </p>
        </div>
        <div className="md:flex md:justify-center gap-50">
          {statistics.map(({ num, desc }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center mt-6"
            >
              <h4 className="text-green font-bold text-3xl">{num}</h4>
              <p className="text-gray mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
