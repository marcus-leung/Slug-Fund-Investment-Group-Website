import React from "react";
import Dropdown from "../components/Dropdown";
import image from "../assets/YearlyPhotos/2022-2023/22.23.2.jpg";
import discord from "../assets/discord.png";
import { Link } from "react-router-dom";
import texts from "../data/texts";
import faq from "../data/faq";
import Jinsung from "../assets/MemberPhotos/Jinsung.png";
import QRcode from "../assets/qrcode.png";

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
