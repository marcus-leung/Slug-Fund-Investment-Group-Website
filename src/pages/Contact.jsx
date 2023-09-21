import React from "react";
import image from "../assets/sfig-logo.png";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-3 mr-4">
            <img className="img-fluid rounded"
            src={image}
            width="280px"
            alt="SFIG-Logo" />
          </div>
          <div className="col-7 py-5 my-5 fadeInRight">
          <h1 className="py-2 font-weight-bold" style={{fontSize: "50px"}}>Get In Touch</h1>
          <p style={{fontSize: "25px"}}>Email: slugsfundig@gmail.com</p>
          <p style={{fontSize: "25px"}}>Instagram: <a href="https://www.instagram.com/ucsc.sfig/" target="_blank" rel="noopener noreferrer">https://www.instagram.com/ucsc.sfig/</a></p>
          <p style={{fontSize: "25px"}}>Twitter: <a href="https://twitter.com/SFIG_UCSC" target="_blank" rel="noopener noreferrer">https://twitter.com/SFIG_UCSC</a></p>
          <p style={{fontSize: "25px"}}>Discord: <a href="https://discord.gg/zcm5rgkrRS" target="_blank" rel="noopener noreferrer">https://discord.gg/zcm5rgkrRS</a></p>
          <p style={{fontSize: "30px"}}>Join the club by joining the discord!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;