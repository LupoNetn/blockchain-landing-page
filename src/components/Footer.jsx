import React from 'react';
import Logo from '../assets/neofi-logo.png';
import Send from '../assets/Send.png';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl container px-6 mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <img src={Logo} alt="Logo" className="w-10" />
          <p className="text-sm leading-relaxed">
            Empowering decentralized finance through secure and transparent blockchain solutions.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-400 transition">About</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Careers</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Contact</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Blog</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-400 transition">Docs</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Security</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">Subscribe</h4>
          <p className="text-sm mb-4">
            Join our newsletter to stay updated on blockchain innovation.
          </p>
          <form className="flex items-center bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent text-sm px-4 py-2 w-full text-white placeholder-gray-500 focus:outline-none"
            />
            <button type="submit" className="px-4 py-2 bg-green-500 hover:bg-green-600 transition">
              <img src={Send} alt="Send" className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Neofi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
