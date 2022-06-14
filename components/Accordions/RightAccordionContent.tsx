import React from "react";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import { tabItems } from "../../data";
import {motion} from 'framer-motion'
const RightAccordionContent = () => {

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.1,
        yoyo: Infinity
      }
    }
  }
  return (
    <>

      <div className="p-4 ">
        <div className="scrollbar h-[300px] overflow-y-scroll">
          <div className="grid ml-1 grid-cols-3 gap-4 mr-6">
            {tabItems.map((item: any, index) => (
              <motion.div
              variants={buttonVariants}
              whileHover="hover"
                key={index}
                className="text-center inline-block bg-button-colour rounded p-3 text-gray-900 cursor-pointer    hover:outline outline-offset-2 outline-redCustom"
              >
                <p className="text-sm text-gray-500">{item.item}</p>
                <h3 className="text-md leading-normal mb-2 lg:font-bold sm:font-bold text-white">

                  {item.heading}
                </h3>
                <p className="text-xs text-gray-500">{item.percentage}%.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RightAccordionContent;
