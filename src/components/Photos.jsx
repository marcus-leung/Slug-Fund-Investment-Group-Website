import React from "react";
import image1 from "../assets/YearlyPhotos/2022-2023/22.23.1.jpg";
import image2 from "../assets/YearlyPhotos/2022-2023/22.23.2.jpg";

import image3 from "../assets/YearlyPhotos/2021-2022/21.22.1.jpg";
import image4 from "../assets/YearlyPhotos/2021-2022/21.22.2.jpg";
import image5 from "../assets/YearlyPhotos/2021-2022/21.22.3.jpg";
import image6 from "../assets/YearlyPhotos/2021-2022/21.22.4.jpg";


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
          <h1 className="font-weight-bold text-center">
            Woodstock's Pizza Meetup Spring 2023
          </h1>
          <hr />
          <img className="img-fluid p-5" src={image2} alt="last meeting"></img>
          <h1 className="font-weight-bold text-center">
            Last Meeting of 2022-2023
          </h1>
          <hr />
          <div className="row">
            <img className="img-fluid p-1" width="25%" height="50%" src={image3} alt=""></img>
            <img className="img-fluid p-1" width="25%" height="50%" src={image4} alt=""></img>
            <img className="img-fluid p-1" width="25%" height="50%" src={image5} alt=""></img>
            <img className="img-fluid p-1" width="25%" height="50%" src={image6} alt=""></img>
          </div>
          <h1 className="font-weight-bold text-center pt-4">Movie Night 2021-2022</h1>
        </div>
      </div>
    </div>
  );
}

export default Photos;
