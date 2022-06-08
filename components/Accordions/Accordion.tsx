import React, { useState } from "react";
import RightAccordion from "./AccordionComponent";
import LeftAccordionContents from "./LeftAccordionContents";
import RightAccordionContent from "./RightAccordionContent";

const Accordion = () => {
  return (
    <div className="lg:mx-20 sm:mx-5 xs:mt-5  xs:mx-5 ">
      <div className="grid grid-cols-1  gap-6 xs:gap-2 sm:grid-cols-2">
        <div>
          <RightAccordion title={"Lorem ipsum"}>
            <LeftAccordionContents />
          </RightAccordion>
        </div>
        <div>
          <RightAccordion title={"Hello Workld"}>
            <RightAccordionContent />
          </RightAccordion>
          <RightAccordion title={"Hello Workld"}>
            <h2 className="p-4">The World  is Beautifuly...</h2>
          </RightAccordion>
        </div>
      </div>{" "}
    </div>
  );
};

export default Accordion;
