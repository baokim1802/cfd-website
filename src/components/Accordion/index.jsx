import React, { useState } from "react";

export default function Accordion({ title, date, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const entryClicked = () => {
    console.log("button Clicked");
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  console.log("rerender");
  return (
    <div className="accordion">
      <div className="accordion__title" onClick={entryClicked}>
        <div className="date">{date}</div>
        <h3>{title}</h3>
      </div>
      {isOpen ? (
        <div className="content" style={{ display: "block" }}>
          {children}
        </div>
      ) : null}
    </div>
  );
}
