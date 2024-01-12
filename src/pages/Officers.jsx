import React from "react";
import Person from "../components/Person";
import Brian from "../assets/MemberPhotos/Brian.png";
import Jinsung from "../assets/MemberPhotos/Jinsung.png";
import Alayna from "../assets/MemberPhotos/Alayna.png";
import Marcus from "../assets/MemberPhotos/Marcus.jpg";
import Trevor from "../assets/MemberPhotos/Trevor.png";
import Alex from "../assets/MemberPhotos/Alex.png";
import Ryan from "../assets/MemberPhotos/Ryan.png";
import Josephine from "../assets/MemberPhotos/Josephine.png";
import MJ from "../assets/MemberPhotos/MJ.png";
import Kevin from "../assets/MemberPhotos/Kevin.png";

function Members() {
  return (
    <div className="officers">
      <div className="container">
        <div className="row pt-5 my-5">
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
            align="center"
          >
            <Person img={Brian} name="Brian Shen" role="President" />
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
            align="center"
          >
            <Person img={Jinsung} name="Jinsung Park" role="Vice President" />
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
            align="center"
          >
            <Person
              img={Alayna}
              name="Alayna Rangel"
              role="Director of External Affairs"
            />
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
            align="center"
          >
            <Person
              img={Marcus}
              name="Marcus Leung"
              role="Web Developer | Officer of External Affairs"
            />
          </div>

          <div
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
            align="center"
          >
            <Person img={Kevin} name="Kevin Habek" role="Director of Content" />
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
            align="center"
          >
            <Person img={Alex} name="Alex Kosan" role="Equity Analyst Lead" />
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
            align="center"
          >
            <Person name="Bruno Madrid" role="Venture Capital Lead" />
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
            align="center"
          >
            <Person
              img={Trevor}
              name="Trevor Le"
              role="Officer of External Affairs"
            />
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
            align="center"
          >
            <Person
              img={Josephine}
              name="Josephine Wang"
              role="Officer of External Affairs"
            />
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
            align="center"
          >
            <Person
              img={Ryan}
              name="Ryan Ni"
              role="Officer of External Affairs"
            />
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
            align="center"
          >
            <Person
              img={MJ}
              name="M. Jahra"
              role="Officer of External Affairs"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
