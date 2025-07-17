import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { PiLineVertical } from "react-icons/pi";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return !isMenuOpen ? (
    <div className="w-full py-8 px-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-amber-400"></div>
        <button
          className="text-2xl font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Rituraj Bhardwaj
        </button>
      </div>

      <button
        type="button"
        onClick={() => setIsMenuOpen(true)}
        className="cursor-pointer lg:hidden"
      >
        <AiOutlineMenu size={28} />
      </button>

      <div className="hidden lg:flex items-center gap-2">
        <NavLink
          to={"/resume"}
          className={"font-light text-md tracking-wide hover:text-blue-600"}
        >
          Resume
        </NavLink>
        <PiLineVertical size={24}/>
        <NavLink
          to={"/projects"}
          className={"font-light text-md tracking-wide hover:text-blue-600"}
        >
          Projects
        </NavLink>
        <PiLineVertical size={24}/>
        <NavLink
          to={"/contact"}
          className={"font-light text-md tracking-wide hover:text-blue-600"}
        >
          Contact
        </NavLink>
      </div>
    </div>
  ) : (
    <div className="w-full flex flex-col p-4">
      <div className="w-full flex justify-end mb-4">
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className="cursor-pointer"
        >
          <MdClose size={28} />
        </button>
      </div>

      <button
        type="button"
        onClick={() => {
          setIsMenuOpen(false);
          navigate("/resume");
        }}
        className="text-2xl text-center m-4 cursor-pointer"
      >
        Resume
      </button>

      <button
        type="button"
        onClick={() => {
          setIsMenuOpen(false);
          navigate("/projects");
        }}
        className="text-2xl text-center m-4 cursor-pointer"
      >
        Projects
      </button>

      <button
        type="button"
        onClick={() => {
          setIsMenuOpen(false);
          navigate("/contact");
        }}
        className="text-2xl text-center m-4 cursor-pointer"
      >
        Contact
      </button>
    </div>
  );
};

export default Navbar;
