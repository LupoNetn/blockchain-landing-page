import React from "react";

const testimonials = [
  {
    text: "This blockchain app made my transactions faster and more secure than ever!",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Alice Johnson",
  },
  {
    text: "I love the decentralized features. I feel in control of my assets.",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Michael Lee",
  },
  {
    text: "Connecting with other platforms was seamless. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Priya Singh",
  },
  {
    text: "The user interface is clean and easy to use. Great experience overall.",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "David Kim",
  },
  {
    text: "Scalability is impressive. No lag even with high transaction volume.",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Fatima Al-Sayed",
  },
  {
    text: "Customer support is responsive and helpful. Five stars!",
    img: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "John Smith",
  },
  {
    text: "I trust this app for all my blockchain needs. Security is top-notch.",
    img: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Linda Chen",
  },
  {
    text: "The future of finance is here. This app is leading the way!",
    img: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "Carlos Martinez",
  },
];

// group testimonials into blocks of 4
const chunk = (arr, size) =>
  arr.reduce(
    (acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc),
    []
  );

const TestimonialsScroller = () => {
  const blocks = chunk([...testimonials, ...testimonials], 4); // duplicate for loop

  return (
    <section className="relative bg-gray-dark py-10 overflow-hidden">
      <div className="container px-6 mx-auto text-center lg-max-width">
        <h3 className="section-title">
          Trusted By Innovators
        </h3>
        <p className="section-desc">
          Secure your digital future with our cutting-edge blockchain solutions,
          trusted by industry leaders and innovators worldwide.
        </p>
      </div>

      {/* Fades */}
      <div className="absolute top-0 left-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-gray-dark to-transparent" />
      <div className="absolute top-0 right-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-gray-dark to-transparent" />

      {/* Scrolling block of testimonial grids */}
      <div className="overflow-hidden mt-8 px-6">
        <div className="flex gap-8 w-max animate-scroll-2col-blocks">
          {blocks.map((group, index) => (
            <div
              key={index}
              className="grid grid-cols-2 grid-rows-2 gap-4 min-w-[600px] md:min-w-[700px] shrink-0"
            >
              {group.map(({ text, img, name }, i) => (
                <div
                  key={i}
                  className="bg-black rounded-xl p-4 flex flex-col items-center text-center border border-gray"
                >
                  <img
                    src={img}
                    alt={name}
                    className="w-16 h-16 rounded-full mb-3 object-cover"
                  />
                  <p className="text-gray mb-2 text-sm">"{text}"</p>
                  <span className="text-green font-bold">{name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes scroll-2col-blocks {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll-2col-blocks {
          animation: scroll-2col-blocks 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsScroller;
