import React from "react";
import scalabilityImg from "../assets/scalability.png";
import decentralizationImg from "../assets/decentralization.png";
import connectivityImg from "../assets/connectivity.png";

const features = [
	{
		img: scalabilityImg,
		head: "Scalability",
		desc: "Effortlessly handle growing user demand and transactions with robust, scalable blockchain infrastructure.",
	},
	{
		img: decentralizationImg,
		head: "Decentralization",
		desc: "Empower users with a trustless, distributed network that eliminates single points of failure and control.",
	},
	{
		img: connectivityImg,
		head: "Connectivity",
		desc: "Seamlessly integrate with other platforms and blockchains for a truly connected digital ecosystem.",
	},
];

const Features = () => {
	return (
		<section className="relative">
			{/* Smaller, centralized radial gradient */}
			<div
				className="absolute inset-0 w-full h-full pointer-events-none z-0"
				style={{
					background:
						"radial-gradient(circle at 50% 50%, #1e3a8a26 0%, #000000f2 30%)",
					opacity: 1,
				}}
			/>
			<div className="relative z-10 container mx-auto px-6 py-10">
				<div className="lg-max-width">
					<div className="flex justify-center">
						<div className="text-green flex items-center border border-gray rounded-2xl px-3 py-1">
							<span className="font-bold text-sm">features</span>
						</div>
					</div>
					<h3 className="section-title">Future Breakdown</h3>
					<p className="section-desc">
						Secure,Scalable, and decentralized solutions for your digital
						assets-experience the future of financial freedom
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
					{features.map(({ img, head, desc }, idx) => (
						<div
							key={idx}
							className="bg-gray-dark border border-gray rounded-xl p-6 flex flex-col items-center text-center"
						>
							<img
								src={img}
								alt={head}
								className="w-16 h-16 mb-4 object-contain"
							/>
							<h4 className="text-green font-bold text-lg mb-2">{head}</h4>
							<p className="text-gray">{desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
