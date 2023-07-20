import React from "react";
import image1 from "../assets/22.23.1.jpg";
import image2 from "../assets/22.23.2.jpg";

function Photos() {
  return (
    <div className="photos">
      <div className="container">
        <div className="align-items-center">
          <img
            className="img-fluid p-5"
            src={image1}
            alt="Woodstock Pizza"
          ></img>
          <h1 class="font-weight-bold text-center">
            Woodstock's Pizza Meetup Spring 2023
          </h1>
          <hr />
          <img className="img-fluid p-5" src={image2} alt="last meeting"></img>
          <h1 class="font-weight-bold text-center">
            Last Meeting of 2022-2023 academic year
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Photos;
