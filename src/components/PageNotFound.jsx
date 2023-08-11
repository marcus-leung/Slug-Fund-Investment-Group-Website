import React from "react";
import discord from "../assets/discord.png";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="pagenotfound">
      <div className="container my-5 py-5">
        <div className="row align-items-center my-5 py-5">
          <div className="col-lg-7 text-center">
            <h2>
              Page Not Found. Please join the Discord if you have any question
              discord.gg/zcm5rgkrRS
            </h2>
          </div>
          <div className="col-lg-5">
            <Link to="https://discord.gg/zcm5rgkrRS">
              <img
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
  );
}

export default PageNotFound;
