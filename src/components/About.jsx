import React from "react";
import aboutImg from "../assets/assets/about.jpg";
import { ABOUT_TEXT } from "../assets/constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="About" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center lg:items-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
            <a href="https://drive.google.com/file/d/1IiIf-0eE3aEUtVn3S1mGulaz-PXoutSc/view?usp=sharing"><button className="mt-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-white font-semibold shadow-lg shadow-purple-500/50 hover:shadow-purple-600/70 transition duration-300 ease-in-out hover:from-pink-500 hover:to-purple-500 focus:outline-none">
              Resume
            </button></a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
