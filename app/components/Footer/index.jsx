import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a192c] text-white pt-16 pb-8 px-6 rounded-t-lg">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <img src="/BYTEVIA.png" alt="Bytevia Logo" className="h-10 mb-4" />
          <p className="text-sm opacity-70">
            Bytevia is your trusted partner for innovative tech solutions. Your
            idea, our solution.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Company</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#" className="hover:text-blue-light-2">About Us</a></li>
            <li><a href="#" className="hover:text-blue-light-2">Services</a></li>
            <li><a href="#" className="hover:text-blue-light-2">Projects</a></li>
            <li><a href="$" className="hover:text-blue-light-2">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Support</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#" className="hover:text-blue-light-2">FAQ</a></li>
            <li><a href="#" className="hover:text-blue-light-2">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-light-2">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full bg-white text-[#0a192c] hover:bg-blue-light-2 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 rounded-full bg-white text-[#0a192c] hover:bg-blue-light-2 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 rounded-full bg-white text-[#0a192c] hover:bg-blue-light-2 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 rounded-full bg-white text-[#0a192c] hover:bg-blue-light-2 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Bytevia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
