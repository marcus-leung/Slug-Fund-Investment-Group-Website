import React from "react";
import image1 from "../assets/YearlyPhotos/2022-2023/22.23.1.jpg";
import image2 from "../assets/YearlyPhotos/2022-2023/22.23.2.jpg";

import image3 from "../assets/YearlyPhotos/2021-2022/21.22.1.jpg";
import image4 from "../assets/YearlyPhotos/2021-2022/21.22.2.jpg";
import image5 from "../assets/YearlyPhotos/2021-2022/21.22.3.jpg";
import image6 from "../assets/YearlyPhotos/2021-2022/21.22.4.jpg";

import image7 from "../assets/YearlyPhotos/2023-2024/23.24.1.jpg";
import image8 from "../assets/YearlyPhotos/2023-2024/23.24.2.jpg";
import image9 from "../assets/YearlyPhotos/2023-2024/23.24.3.jpg";
import image10 from "../assets/YearlyPhotos/2023-2024/23.24.4.jpg";
import image11 from "../assets/YearlyPhotos/2023-2024/23.24.5.jpg";
import image12 from "../assets/YearlyPhotos/2023-2024/23.24.6.jpg";

function Photos() {
  return (
    <div className="photos">
      <div className="container">
        <div className="align-items-center text-center">
          <img
            className="img-fluid pt-5 px-5"
            src={image7}
            alt="UC Investment Guest Speaker"
          ></img>
          <img
            className="img-fluid pt-5 px-5"
            src={image8}
            alt="UC Investment Guest Speaker"
          ></img>
          <img
            className="img-fluid pt-5 px-5"
            src={image9}
            alt="UC Investment Guest Speaker"
          ></img>
          <img
            className="img-fluid pt-5 px-5"
            src={image12}
            alt="UC Investment Guest Speaker"
          ></img>
          <div className="row">
            <img
              className="img-fluid py-5 pl-5 pr-1"
              width="45%"
              src={image10}
              alt="Brian takes a selfie"
            ></img>
            <img
              className="img-fluid py-5 pr-5 pl-1"
              width="55%"
              src={image11}
              alt="Marcus has pizza"
            ></img>
          </div>
          <h1 className="font-weight-bold text-center">
            UC Investment Guest Speaker Event
            <h2>with Jimmy Castro</h2>
            <h3>Fall 2023</h3>
          </h1>
          <hr />
          <img
            className="img-fluid p-5"
            src={image1}
            alt="Woodstock Pizza"
          ></img>
          <h1 className="font-weight-bold text-center">
            Woodstock's Pizza Meetup
            <h3>Spring 2023</h3>
          </h1>
          <hr />
          <img className="img-fluid p-5" src={image2} alt="last meeting"></img>
          <h1 className="font-weight-bold text-center">
            Last Meeting of 2022-2023
          </h1>
          <hr />
          <div className="row">
            <img
              className="img-fluid p-1"
              width="25%"
              src={image3}
              alt="movie night"
            ></img>
            <img
              className="img-fluid p-1"
              width="25%"
              src={image4}
              alt="movie night"
            ></img>
            <img
              className="img-fluid p-1"
              width="25%"
              src={image5}
              alt="movie night"
            ></img>
            <img
              className="img-fluid p-1"
              width="25%"
              src={image6}
              alt="movie night"
            ></img>
          </div>
          <h1 className="font-weight-bold text-center pt-4">
            Movie Night 2021-2022
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Photos;
