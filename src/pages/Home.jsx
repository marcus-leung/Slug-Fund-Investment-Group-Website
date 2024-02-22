import React from "react";
import Dropdown from "../components/Dropdown";
import image from "../assets/YearlyPhotos/2022-2023/22.23.2.jpg";
import discord from "../assets/discord.png";
import { Link } from "react-router-dom";
import texts from "../data/texts";
import faq from "../data/faq";
import Jinsung from "../assets/MemberPhotos/Jinsung.png";
import QRcode from "../assets/qrcode.png";
import Loc from "../assets/meeting_loc.png";

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
      <div className="bg-light-blue py-5">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={Loc}
              alt="Location on map"
              width="110%"
              height="110%"/>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <h2>Weekly Meetings on Thurdays 8pm-9pm in Social Science 2 Room 71!</h2>
            </div>
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
                />
              </Link>
            </div>
          </div>
          <div className="row align-items-center my-4">
            <div className="col-lg-4">
              <img width="220px" height="220px" alt="QRCode" src={QRcode} />
            </div>
            <div className="col-lg-7">
              <h2>Join our mailing list through the QR Code</h2>
              <h3>(make sure to sign into your ucsc email)</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center text-center my-5 py-5">
          <h1 className="mb-4">UC Investments Partnership</h1>
          <h4>{homeText.uci}</h4>
          <h2>More Info/Apply Here: &nbsp;
            <a href="https://drive.google.com/file/d/1AXeiQMA8W1nx8U9NXwum9QEEy0J2Xy8c/view" target="_blank" rel="noopener noreferrer">UC Investments</a>
          </h2>
        </div>
      </div>
      <div className="bg-light-blue py-5">
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
            <h5>{homeText.description3}</h5>
            <h5>{homeText.description4}</h5>
          </div>
        </div>
      </div>
      </div>
      <div className="bg-yellow py-4">
        <div className="container my-5">
          <div className="section-title row justify-content-center">
            <h1 className="mb-4">FAQ</h1>
          </div>
            <Dropdown label={faq.faq1.question1}>
              <p>{faq.faq1.answer1}</p>
            </Dropdown>
            <Dropdown label={faq.faq2.question2}>
              <p>{faq.faq2.answer2}</p>
            </Dropdown>
            <Dropdown label={faq.faq3.question3}>
              <p>{faq.faq3.answer3}</p>
            </Dropdown>
            <Dropdown label={faq.faq4.question4}>
              <p>{faq.faq4.answer4}</p>
            </Dropdown>
            <Dropdown label={faq.faq5.question5}>
              <p>{faq.faq5.answer5}</p>
            </Dropdown>
            <Dropdown label={faq.faq6.question6}>
              <p>{faq.faq6.answer6}</p>
            </Dropdown>
            <Dropdown label={faq.faq7.question7}>
              <p>{faq.faq7.answer7}</p>
            </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Home;
