import React from "react";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full p-4 mt-12 border-t-[0.5px] border-gray-300 lg:flex justify-between items-center lg:pt-12 lg:pb-20">
      <div>
        <h2 className="text-lg font-bold">Phone</h2>
        <p>+91 7485006011</p>
      </div>
      <div>
        <h2 className="text-lg font-bold">Email</h2>
        <p>riturajbp89@gmail.com</p>
      </div>
      <div>
        <h2 className="text-lg font-bold">Follow Me</h2>
        <a
          href="https://www.linkedin.com/in/rituraj-bhardwaj-a42636255/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          <FaLinkedin size={24}/>        
        </a>
      </div>
    </div>
  );
};

export default Footer;
