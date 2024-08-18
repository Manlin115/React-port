import React from "react";
import { HERO_CONTENT } from "../assets/constants";
import profilePic from "../assets/assets/avatar3 copy1.png";
import { motion } from "framer-motion";
import ReactTypingEffect from 'react-typing-effect';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Manlin Roswa
            </motion.h1>

            <ReactTypingEffect
              text={["Front-end Developer" ,"UI-Designer"]}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
              speed={100}
              eraseSpeed={50}
              eraseDelay={2000}
              typingDelay={500}
            />

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
          <a href="mailto:manlinroswa115@gmail.com?body=Hello, My name is (your name), from (your place) (your message)"><button className="mt-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-white font-semibold shadow-lg shadow-purple-500/50 hover:shadow-purple-600/70 transition duration-300 ease-in-out hover:from-pink-500 hover:to-purple-500 focus:outline-none">
              Contact me
            </button></a>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Manlin Roswa"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


// import React from "react";
// import { HERO_CONTENT } from "../assets/constants";
// import profilePic from "../assets/assets/avatar3 copy1.png";
// import { motion } from "framer-motion";

// const container =(delay)=>({
//     hidden:{x:-100 , opacity:0 },
//     visible:{
//         x:0,
//         opacity:1,
//         transition:{duration:0.5 ,delay:delay},
//     },
// })

// const Hero = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//       <div className="flex flex-wrap">
//         <div className="w-full lg:w-1/2">
//           <div className="flex flex-col items-center lg:items-start">
//             <motion.h1
//                variants={container(0)}
//                initial="hidden"
//                animate="visible"
//               className="pb-16 text-6xl font-thin tracking-tight
//                     lg:mt-16 lg:text-7xl"
//             >
//               Manlin Roswa
//             </motion.h1>
            
//             <motion.span
//              variants={container(0.5)}
//              initial="hidden"
//              animate="visible"
//               className="bg-gradient-to-r from-pink-300
//                     via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight
//                     text-transparent"
//             >
//               Front-end Developer
//             </motion.span>
//             <motion.p 
//             variants={container(1)}
//             initial="hidden"
//             animate="visible"
//             className="my-2 max-w-xl py-6 font-light tracking-tighter">
//               {HERO_CONTENT}
//             </motion.p>
//           </div>
//         </div>
//         <div className="w-full lg:w-1/2 lg:p-8">
//           <div className="flex justify-center">
//             <motion.img 
//             initial={{x:100,opacity:0}}
//             animate={{x:0, opacity:1}}
//             transition={{duration:1, delay:1.2}}
//               src={profilePic}
//               alt="Manlin Roswa"
//               className="max-w-full h-auto "
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;