import { useState } from "react";
import "./styles.css";

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    //it is on the div that we will listen to the event:onClick={handleToggle}
    //add open class conditionally see styles.css
    <div className={`item${isOpen ? "open" : ""}`} onClick={handleToggle}>
      {/*pacing a zero in front of the number*/}
      <p className="num">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
export default AccordionItem;
