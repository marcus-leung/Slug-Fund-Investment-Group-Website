import React from "react";
import image from "../assets/YearlyPhotos/2022-2023/22.23.2.jpg";
import discord from "../assets/discord.png";
import { Link } from "react-router-dom";
import texts from "../data/texts";

function Home() {
  const homeText = texts.home;

  return (
    <div className="home">
      <div className="container py-5">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h1 className="font-weight-light">{homeText.title}</h1>
            <p className="lead">{homeText.description}</p>
          </div>
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-5 ml-5"
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
                  height="160"
                  src={discord}
                  alt="discord"
                ></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
