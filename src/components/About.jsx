import React from "react";
import image from "../assets/22.23.3.jpg";

function About() {
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
            <h1 className="font-weight-light">Who We Are</h1>
            <p>
              Slug Fund Investment Group is a student-run club striving to
              create a community of individuals passionate about finance and
              investing. Our goal is to equip our members with the knowledge,
              skills, and experience to succeed in the real world after
              graduation. We operate through three teams: Equity Analyst,
              Venture Analyst, and Crypto Analyst. Everyone is welcome and free to
              join the club at any time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
