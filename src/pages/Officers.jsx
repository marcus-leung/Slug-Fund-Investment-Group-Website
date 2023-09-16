import React from "react";
import Person from "../components/Person";
import Brian from "../assets/MemberPhotos/Brian.png";
import Jinsung from "../assets/MemberPhotos/Jinsung.png";
import Alayna from "../assets/MemberPhotos/Alayna.png";
import Marcus from  "../assets/MemberPhotos/Marcus.jpg";
import Trevor from "../assets/MemberPhotos/Trevor.png";
import Tensi from "../assets/MemberPhotos/Tensi.png";
import Alex from "../assets/MemberPhotos/Alex.png";

function Members() {
  return (
    <div className="officers">
      <div className="container">
        <div className="row pt-5">
          <div className="col-3" align="center">
            <Person img={Brian} name="Brian Shen" role="President" />
          </div>
          <div className="col-3" align="center">
            <Person img={Jinsung} name="Jinsung Park" role="Vice President" />
          </div>
          <div className="col-3" align="center">
            <Person img={Alayna} name="Alayna Rangel" role="Director of External Affairs" />
          </div>
          <div className="col-3" align="center">
            <Person img={Marcus} name="Marcus Leung" role="Web Developer | Officer of External Affairs" />
          </div>
        </div>
        <div className="row py-5">
          <div className="col-3" align="center">
            <Person name="Darren Yu" role="Officer of External Affairs" />
          </div>
          <div className="col-3" align="center">
            <Person img={Trevor} name="Trevor Le" role="Officer of External Affairs" />
          </div>
          <div className="col-3" align="center">
            <Person name="Kevin" role="Director of Content" />
          </div>
          <div className="col-3" align="center">
            <Person img={Tensi} name="Tensi Vilchis" role="Officer of Content" />
          </div>
        </div>
        <div className="row py-5">
          <div className="col-3" align="center">
            <Person img={Alex} name="Alex Kosan" role="Equity Analyst Lead" />
          </div>
          <div className="col-3" align="center">
            <Person name="Bruno" role="Venture Capital Lead" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
