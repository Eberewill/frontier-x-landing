import React, { useState } from "react";
import Script from "next/script";
import { ArrowUpIcon, LockClosedIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

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
          <div className="text-white font-semibold pl-2 group-hover:text-white">
            {title}
          </div>
        </div>
        <div className="flex items-center justify-center pr-3">
          {activeState ? (
            <ChevronDownIcon  className="w-6 h-6  text-white white" />
          ) : (
            <ChevronUpIcon className="w-6 h-6 text-white white" />
          )}
        </div>
      </div>

      {activeState && (
        <div className="bg-bgdrk pl-4 rounded-b-lg font-semibold text-white w-full h-auto  pb-5  mb-2 ">
          {children}
        </div>
      )}
    
    </div>
    </>
  );
};

export default AccordionComponent;
