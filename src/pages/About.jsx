import React from "react";
import image from "../assets/YearlyPhotos/2022-2023/22.23.3.jpg";
import texts from "../data/texts";
import amazon from "../assets/Companies/amazon.png";
import adam from "../assets/Companies/mossadam.png";
import apple from "../assets/Companies/apple.png";
import jpmorgan from "../assets/Companies/jpmorgan.png";

function About() {
  const aboutText = texts.about;

  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7 fadeInLeft">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={image}
              alt="sfig-3"
            />
          </div>
          <div className="col-lg-5 fadeInRight">
            <h1 className="font-weight-light">{aboutText.title}</h1>
            <p style={{ fontSize: "19px" }}>{aboutText.description}</p>
          </div>
        </div>
      </div>
      <div className="container p-5 text-center">
        <h1>Alumni Placements</h1>
        <div className="col">
          <img className="img-fluid m-2" src={adam} alt="Moss Adams" width="40%"/>
          <img className="img-fluid m-2 p-2" src={apple} alt="Moss Adams" width="40%"/>
          <img className="img-fluid m-2 p-4" src={amazon} alt="Moss Adams" width="40%"/>
          <img className="img-fluid m-2 pb-4" src={jpmorgan} alt="J.P. Morgan" width="40%"/>
        </div>
      </div>
    </div>
  );
}

export default About;
