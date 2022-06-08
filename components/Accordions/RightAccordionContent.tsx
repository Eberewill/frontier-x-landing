import React from "react";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import { tabItems } from "../../data";
const RightAccordionContent = () => {
  return (
    <>
      <div className="p-4">
        <SimpleBarReact
          style={{
            maxHeight: 300,
          }}
        >
          <div className="grid grid-cols-3 gap-4 pr-7">
            {tabItems.map((item: any, index) => (
              <div
                key={index}
                className="text-center  border-transparent inline-block bg-button-colour rounded p-4 text-gray-900 mb-4 hover:border border-redCustom"
              >
                <p className="text-xs text-gray-500">{item.item}</p>
                <h3 className="text-base lg:my-2 leading-normal  font-extrabold text-white">
                  {item.heading}
                </h3>
                <p className="text-xs text-gray-500">{item.percentage}%.</p>
              </div>
            ))}
          </div>
        </SimpleBarReact>
      </div>
    </>
  );
};

export default RightAccordionContent;
