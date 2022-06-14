import React, { useState } from "react";
import Script from "next/script";
import { ArrowUpIcon, LockClosedIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { motion, AnimatePresence } from 'framer-motion';
const AccordionComponent = ({
  title,
  children,
}: {
  title: string | React.ReactNode;
  children: React.ReactNode;
  
}) => {

  const [activeState, setActiveState] = useState(false)
  const handleActiveState = () => {
      setActiveState(!activeState)
  }

  const buttonVariants = {
    hover: {
      scale: 1.5,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  }
  
  const nextVariants = {
    hidden: { 
      y: '-100vw' ,
      opacity: 0,
      
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120 , mass: 0.4, damping: 8}
    },
    exit: {
      y: "-100vh",
      transition: { ease: 'easeInOut' }
    }
  }

  return (
    <>
    
    <div className="flex flex-col justify-center items-center rounded-xl h-auto pb-20">
      <div
        onClick={handleActiveState}
        className={`flex group cursor-pointer w-full mx-auto h-16 justify-between  items-center p-2 mt-2 ${activeState ? 'rounded-t-lg' : 'rounded-md'} bg-bgdrk`}
      >
        <div className="flex group cursor-pointer">
            <div className="pl-6">
                <Image
                 width={14}
                 height={14}
                 alt="2"
                 src="/asset/button2.svg"
                />
            </div>
          <div  className="text-white font-semibold pl-2 group-hover:text-white">
            {title}
          </div>
        </div>
        <motion.div
        variants={buttonVariants}
        whileHover="hover"
        className="flex items-center justify-center pr-3">
          {activeState ? (
            <ChevronDownIcon  className="w-6 h-6  text-white white" />
          ) : (
            <ChevronUpIcon className="w-6 h-6 text-white white" />
          )}
        </motion.div>
      </div>
<AnimatePresence>
      {activeState && (
        <motion.div
        exit="exit"
        variants={nextVariants}
        initial="hidden"
        animate="visible"
         className="bg-bgdrk pl-4 rounded-b-lg font-semibold text-white w-full h-auto  pb-5  mb-2 ">
          {children}
        </motion.div>
      )}
    </AnimatePresence>
    </div>
    </>
  );
};

export default AccordionComponent;
