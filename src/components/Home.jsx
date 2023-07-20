import React from "react";
import image from "../assets/22.23.2.jpg";
import discord from "../assets/discord.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="container py-5">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h1 className="font-weight-light">
              Welcome to Slug Fund Investment Group!
            </h1>
            <p className="lead">
              We are a group of passionate students interested in learning about
              the world of finance and investments at UCSC. Our club aims to
              empower individuals with the knowledge, tools, and support they
              need to make informed investment decisions and achieve financial
              success.
            </p>
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
              <h2>
                Join our club and become part of our vibrant community by
                joining our Discord server.
              </h2>
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
