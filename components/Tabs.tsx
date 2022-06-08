
import Image from "next/image";
import React from "react";

const Tabs = () => {
  return (
    <div className="flex items-center justify-center  my-10 ">
      <div className="m-5">
        <button
          type="button"
          className="inline-flex items-center px-12 py-5 border border-transparent shadow-sm text-xl font-medium rounded-md text-white bg-button-colour hover:bg-x-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Image
            width={20}
            height={20}
            alt="2"
            src="/asset/button1.svg"
          
          />
         <div className="px-3">Lorem ipsum</div> 
        </button>
      </div>

      <div className="m-8" >
        <button
          type="button"
          className="inline-flex items-center px-12 py-5 border border-transparent shadow-sm text-xl font-medium rounded-md text-white bg-button-colour hover:bg-x-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Image
            width={20}
            height={20}
            alt="2"
            src="/asset/button2.svg"
          
            aria-hidden="true"
          />
          <div className="px-3">Lorem ipsum</div> 
        </button>
      </div>

      <div className="m-8">
        <button
          type="button"
          className="inline-flex items-center px-12 py-5 border border-transparent shadow-sm text-xl font-medium rounded-md text-white bg-button-colour hover:bg-x-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Image
            width={20}
            height={20}
            alt="2"
            src="/asset/button3.svg"
          
          />
          <div className="px-3">Lorem ipsum</div> 
        </button>
      </div>
    </div>
  );
};

export default Tabs;
