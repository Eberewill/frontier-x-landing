import React from "react";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import { tabItems } from "../../data";
const RightAccordionContent = () => {
  return (
    <>

      <div className="p-4 ">
        <div className="scrollbar h-[300px] overflow-y-scroll">
          <div className="grid grid-cols-3 gap-4 mr-6">
            {tabItems.map((item: any, index) => (
              <div
                key={index}
                className="text-center inline-block bg-button-colour rounded p-3 text-gray-900 cursor-pointer    hover:outline outline-offset-2 outline-redCustom"
              >
                <p className="text-sm text-gray-500">{item.item}</p>
                <h3 className="text-md leading-normal mb-2 lg:font-bold sm:font-bold text-white">

                  {item.heading}
                </h3>
                <p className="text-xs text-gray-500">{item.percentage}%.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RightAccordionContent;
