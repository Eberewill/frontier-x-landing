import React, { useState } from "react";
import RightAccordion from "./AccordionComponent";
import LeftAccordionContents from "./LeftAccordionContents";
import RightAccordionContent from "./RightAccordionContent";

const Accordion = () => {
  return (
    <div className="mx-20 xs:mx-2">
      <div className="grid grid-cols-1  gap-6 sm:grid-cols-2">
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
            <h2 className="p-4">The World we are in is Beautifuly made</h2>
          </RightAccordion>
        </div>
      </div>{" "}
    </div>
  );
};

export default Accordion;
