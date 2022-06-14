import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion';

const Contents = () => {
  return (
    <>
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
          className="flex justify-center items-center -mt-6">
        <motion.div
         whileHover={{ 
          scale: [1, 1.4, 1.2],
          rotate: [0, 10, -10,0], 
          textShadow: "0px 0px 8px rgb(255,255,255)",
         // boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
         className="-mt-20 sm:-mt-20 ">
          <Image
            width="149px"
            height="149px"
            src="/asset/eye.gif"
            alt="roundeye"
            className="rounded-full "
          />
        </motion.div>
      </motion.div>
      <motion.h1
      initial='hidden' animate='visible' variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible:{
          scale: 1,
          opacity: 1,
          transition: {
            delay: .5
          }
        }
      }}
       className="text-center mt-9 text-5xl xs:text-2xl font-bold">
        <span className="block text-white font-family-Manrope">
          Lorem ipsum
        </span>
      </motion.h1>

      <p className="text-center mt-2 text-base">
        <span className="block text-white">
          Created by : <span className=" text-red-400">Lorem ipsum</span>{" "}
        </span>
        <span className="block text-white  mt-2">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
        </span>
      </p>
    </>
  );
};

export default Contents;
