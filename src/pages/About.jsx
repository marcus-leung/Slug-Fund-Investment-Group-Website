import React from "react";
import image from "../assets/YearlyPhotos/2022-2023/22.23.3.jpg";
import texts from "../data/texts";
function About() {
  const aboutText = texts.about;

  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={image}
              alt="sfig-3"
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">{aboutText.title}</h1>
            <p>{aboutText.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
