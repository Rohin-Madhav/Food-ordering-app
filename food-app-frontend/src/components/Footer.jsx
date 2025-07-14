import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-900 text-gray-200 py-2 shadow-lg z-50">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-center text-xs mb-0">
          © 2025{" "}
          <span className="font-semibold text-white">Food Order Website</span>.
          All rights reserved.{" "}
          <span className="hidden sm:inline">
            Order delicious food anytime, anywhere.
          </span>
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <span className="flex items-center gap-1 text-xs">
            Contact:{" "}
            <a
              href="mailto:support@foodorder.com"
              className="underline hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              support@foodorder.com <MdEmail className="inline-block" />
            </a>
          </span>
          <span className="flex items-center gap-1 text-xs">
            Customer Care:{" "}
            <a
              href="tel:+911234567890"
              className="underline hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              +91 12345 67890 <FaPhone className="inline-block" />
            </a>
          </span>
        </div>
        <ul className="flex space-x-4 mt-2 sm:mt-0">
          <li>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-500 text-xl transition-colors"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-blue-400 text-xl transition-colors"
            >
              <FaSquareXTwitter />
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-500 text-xl transition-colors"
            >
              <FaInstagramSquare />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
