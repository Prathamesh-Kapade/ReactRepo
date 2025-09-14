import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md"; 
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="flex items-center space-x-2">
          <Logo width="120px" />
        </Link>

        <div className="flex space-x-6 text-xl">
          <a
            href="https://instagram.com/kapade_prathamesh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:prathameshkapade6@gmail.com" 
            className="hover:text-red-500 transition"
          >
            <MdEmail />
          </a>
          <a
            href="https://linkedin.com/in/prathameshkapade?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4 text-sm">
        &copy; {new Date().getFullYear()} Blog Project | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
