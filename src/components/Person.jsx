import React from "react";
import defaultImage from "../assets/MemberPhotos/Default-PFP.png";

function Person(props) { //props.img, props.name, props.role
  return (
    <div className="person">
      {props.img ? <img src={props.img} height="150px" width="150px" /> : <img src={defaultImage} height="150px" width="150px" />}
      <div className="pt-3">{props.name}</div>
      <div>{props.role}</div>
    </div>
  );
}

export default Person;
