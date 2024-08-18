import { RiReactjsLine, RiGithubFill, RiCss3Line, RiHtml5Line, RiJavascriptLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import {motion} from "framer-motion"


const iconVariants =(duration)=>({
  initial :{y:-10},
  animate:{
    y: [10,-10],
    transition:{
      duration: duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    },
  },
})


const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:1, y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
      whileInView={{opacity:1, x:0}}
      initial={{opacity:1, x:-100}}
      transition={{duration:1.5}}

      className="flex flex-wrap items-center justify-center gap-4">
        {/* React Icon */}
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        {/* MongoDB Icon */}
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-400" />
        </motion.div>
        {/* HTML5 Icon */}
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiHtml5Line className="text-7xl text-orange-400" />
        </motion.div>
        {/* CSS3 Icon */}
        <motion.div 
        variants={iconVariants(5 )}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiCss3Line className="text-7xl text-blue-400" />
        </motion.div>
        {/* GitHub Icon */}
        <motion.div 
        variants={iconVariants(2 )}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiGithubFill className="text-7xl text-white" />
        </motion.div>
        {/* JavaScript Icon */}
        <motion.div 
        variants={iconVariants(3 )}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavascriptLine className="text-7xl text-yellow-400" />
        </motion.div>
        {/* PostgreSQL Icon */}
        <motion.div 
        variants={iconVariants(4 )}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaDatabase className="text-7xl text-blue-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tech;
