import React from "react";
import insta from "../assets/instagram-logo.jpg";
import twitter from "../assets/twitter-logo.jpg";
import { Link } from "react-router-dom";
import { BsTwitterX, BsLinkedin, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <footer className="py-5 bg-light-blue">
        <div className="container">
          <div className="row">
          <p className="text-center ml-5 pl-5 text-white col-10">
            Slug Fund Investment Group<br></br> 2023 - 2024
          </p>
          <div className="icons col">
            <div className="text-right">
              <Link to="https://www.instagram.com/ucsc.sfig/" target="_blank" rel="noopener noreferrer">
                <BsInstagram                   
                  size={32}
                  color="white"
                  className="mr-2"
                  alt="Instagram"/>
              </Link>
              <Link to="https://twitter.com/SFIG_UCSC" target="_blank" rel="noopener noreferrer">
              <BsTwitterX                   
                  size={32}
                  color="white"
                  className="mr-2"
                  alt="Twitter/x"/>
              </Link>
              <Link to="https://www.linkedin.com/school/slugfundinvestmentgroup/" target="_blank" rel="noopener noreferrer">
              <BsLinkedin                   
                  size={32}
                  color="white"
                  alt="Linkedin"/>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
