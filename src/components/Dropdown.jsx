import React from "react";
import { useState, useRef } from "react";

function Dropdown(props) {
  //props.label , props.children (built in)
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const contentRef = useRef();

  return (
    <div className="dropdown">
      <div className="row">
        <button onClick={toggle} className="collapsible text-left pl-4">
          {props.label}
          
          <i className="fa-solid fa-chevron-down "></i>
        </button>
        <div className="content-parent"
          ref={contentRef} style=
          {open
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }}>
            <div className="content text-left py-3 px-3">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
