import React from "react";
import defaultImage from "../assets/MemberPhotos/Default-PFP.png";

function Person(props) { //props.img, props.name, props.role
  return (
    <div className="person">
      {props.img ? <img src={props.img} height="192px" width="192px" /> : <img src={defaultImage} height="150px" width="150px" />}
      <div className="pt-3" style={{fontSize: "22.5px"}}>{props.name}</div>
      <div className="font-weight-light">{props.role}</div>
    </div>
  );
}

export default Person;
