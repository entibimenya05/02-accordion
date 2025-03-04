import { useState } from "react";
import "./styles.css";

function AccordionItem({
  num,
  title,
  //text,
  curOpen,
  onOpen,
  children,
}) {
  //const [isOpen, setIsOpen] = useState(false);
  const isOpen = num === curOpen;
  function handleToggle() {
    // setIsOpen((isOpen) => !isOpen);
    onOpen(isOpen ? null : num);
  }
  return (
    //it is on the div that we will listen to the event:onClick={handleToggle}
    //add open class conditionally see styles.css
    <div className={`item${isOpen ? "open" : ""}`} onClick={handleToggle}>
      {/*pacing a zero in front of the number*/}
      <p className="num">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
export default AccordionItem;
