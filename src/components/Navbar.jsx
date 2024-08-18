import React from "react";
import logo from "../assets/assets/Manlinlogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="Kevin Rush Logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
       <a href="https://www.linkedin.com/in/manlin-roswa-r-592261278/"><FaLinkedin /></a> 
       <a href="https://github.com/Manlin115"><FaGithub /></a> 
       <a href="https://www.instagram.com/pieces__of_mind11/"><FaInstagram /></a> 
        <a href="mailto:manlinroswa115@gmail.com"><FaEnvelope /></a> 
      </div>
    </nav>
  );
};

export default Navbar;