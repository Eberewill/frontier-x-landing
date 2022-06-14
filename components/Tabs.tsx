
import Image from "next/image";
import React from "react";
import {motion} from 'framer-motion'

const Tabs = () => {

  const buttonVariants = {
    hover: {
      scale: 1.5,
      transition: {
        duration: 0.3,
        
      }
    }
  }
  return (
      <motion.div
      initial='hidden' animate='visible' variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible:{
          scale: 1,
          opacity: 1,
          transition: {
            delay: .4
          },
          
        },
      }}
      className=" lg:mx-20 lg:py-20 xs:my-5 sm:py-5  xs:mx-2 flex justify-center items-center">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div>
        <button
          type="button"
          className="inline-flex  px-10 py-3 border border-transparent shadow-sm text-xl font-medium rounded-md text-white bg-bgdrk hover:bg-x-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <img
            width={15}
            height={15}
            alt="2"
            className="pt-2"
            src="/asset/button1.svg"
          
          />
         <div className="px-3">Lorem ipsum</div> 
        </button>
      </div>

      <div >
        <button
          type="button"
          className="inline-flex  px-10 py-3 border border-transparent shadow-sm text-xl font-medium rounded-md text-white bg-button-colour hover:bg-x-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <img
            width={15}
            height={15}
            alt="2"
            className="pt-2"
            src="/asset/button2.svg"
          
            aria-hidden="true"
          />
          <div className="px-3">Lorem ipsum</div> 
        </button>
      </div>

      <div>
        <button
          type="button"
          className="inline-flex  px-10 py-3 border border-transparent shadow-sm text-xl font-medium rounded-md text-white bg-bgdrk hover:bg-x-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
       <img
            width={15}
            height={15}
            alt="2"
            className="pt-2"
            src="/asset/button3.svg"
          />
          <div className="px-3">Lorem ipsum</div> 
        </button>
      </div>
    </div>
    </motion.div>
  );
};

export default Tabs;
