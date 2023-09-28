import React from "react";
import Dropdown from "../components/Dropdown";
import image from "../assets/YearlyPhotos/2022-2023/22.23.2.jpg";
import discord from "../assets/discord.png";
import { Link } from "react-router-dom";
import texts from "../data/texts";
import Jinsung from "../assets/MemberPhotos/Jinsung.png";

function Home() {
  const homeText = texts.home;

  return (
    <div className="home">
      <div className="container py-5">
        <div className="row align-items-center my-5" style={{ width: "100%" }}>
          <div className="col-lg-5 fadeInLeft">
            <h1 className="font-weight-light">
              <center>{homeText.title}</center>
            </h1>
            <p className="lead pl-2">{homeText.description}</p>
          </div>
          <div className="col-lg-7 pl-0 fadeInRight">
            <img
              className="img-fluid rounded ml-4 pr-4"
              src={image}
              alt="sfig-group"
            />
          </div>
        </div>
      </div>
      <div className="bg-yellow py-4">
        <div className="container">
          <div className="row align-items-center my-5">
            <div className="col-lg-7 ">
              <h2>{homeText.description2}</h2>
            </div>
            <div className="col-lg-5">
              <Link to="https://discord.gg/zcm5rgkrRS">
                <img
                  className="zoom"
                  style={{ marginLeft: "80px" }}
                  width="160px"
                  height="160px"
                  src={discord}
                  alt="discord"
                ></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-4">
            <img
              className="img-fluid rounded"
              style={{ border: "7px solid black" }}
              src={Jinsung}
              alt="president"
            />
          </div>
          <div className="col-lg">
            <h1>{homeText.title2}</h1>
            <p>{homeText.description3}</p>
            <p>{homeText.description4}</p>
          </div>
        </div>
      </div>
      <div className="bg-yellow py-4">
        <div className="container my-5">
          <div className="section-title row justify-content-center">
            <h1>FAQ</h1>
          </div>
            <Dropdown label="test">
              <p>answer</p>
            </Dropdown>
            <Dropdown label="test">
              <p>answer</p>
            </Dropdown>
            <Dropdown label="test">
              <p>answer</p>
            </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Home;
