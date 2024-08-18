import React from 'react';
import { EXPERIENCES } from '../assets/constants';
import { motion } from "framer-motion";
import CountUp from 'react-countup';

const fadeIn = (direction = 'up', duration = 0.5) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === 'right' ? 100 : direction === 'left' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: duration
      }
    }
  };
};

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl '
      >
        Internship & Achievement
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full mx-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role}-
                <span className='text-sm text-purple-100'>{experience.company}</span>
              </h6>
              <p className='mb-4 text-neutral-400'>{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span key={index} className='mr-2 mt-4 rounded bg-purple-900 px-2 py-1 text-sm font-bold text-white-900'>
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}

        {/* Count Display */}
        <motion.div
          variants={fadeIn('right', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex gap-x-6 lg:gap-x-10 mb-12 justify-center bg-gradient-to-r from-blue-600 via-violet-500 to-indigo-400 rounded bg-clip-text  text-transparent inline-block' 
        >
          <div>
            <div className='text-[40px] font-bold'>
              0
              {true ? <CountUp start={0} end={1} duration={3} /> : null}
            </div>
            <div className='font-primary text-sm tracking-[2px]'>Fresher<br />-Year</div>
          </div>
          <div>
            <div className='text-[40px] font-bold '>
              0
              {true ? <CountUp start={0} end={7} duration={3} /> : null}+
            </div>
            <div className='font-primary text-sm tracking-[2px]'>Projects <br /> completed</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;