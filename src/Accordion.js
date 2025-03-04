import AccordionItem from "./AccordionItem";
import { useState } from "react";
function Accordion({ data }) {
  //we want to open the step one at the time
  //here we will store the number that is curOpen, and we start with null as default
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          //pass the text as children
          // text={el.text}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
