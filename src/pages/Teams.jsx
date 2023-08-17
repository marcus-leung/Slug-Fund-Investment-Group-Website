import React from "react";
import { Link } from "react-router-dom";
import EA from "../assets/EquityAnalyst.jpg";
import VA from "../assets/VentureAnalyst.jpg";
import CA from "../assets/CryptoAnalyst.jpg";
import texts from "../data/texts";

function Teams() {
  const teamsText = texts.teams;

  return (
    <div className="teams">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-5">
            <h1>{teamsText.title}</h1>
            <p>(Teams are not require to partake in the club)</p>
          </div>
        </div>
      </div>
      <div className="row no-gutters px-2">
        <div className="col px-2 pb-3">
          <div className="card h-100">
            <img src={EA} className="card-img-top" alt="Equity Analyst Team" />
            <div className="card-body">
              <h5 className="card-title">Equity Analyst Team</h5>
              <p className="card-text">{teamsText.equity}</p>
              <Link to="/equityanalyst">
                <button>View Papers</button>
              </Link>
            </div>
            <div className="card-footer">
              <small className="text-muted">Active 2023-2024</small>
            </div>
          </div>
        </div>
        <div className="col px-2 pb-3">
          <div className="card h-100">
            <img src={VA} className="card-img-top" alt="Venture Analyst Team" />
            <div className="card-body">
              <h5 className="card-title">Venture Analyst Team</h5>
              <p className="card-text">{teamsText.venture}</p>
              <Link to="/ventureanalyst">
                <button>View Papers</button>
              </Link>
            </div>
            <div className="card-footer">
              <small className="text-muted">Active 2023-2024</small>
            </div>
          </div>
        </div>
        <div className="col px-2 pb-3">
          <div className="card h-100">
            <img src={CA} className="card-img-top" alt="Crypto Analyst Team" />
            <div className="card-body">
              <h5 className="card-title">Crypto Analyst Team</h5>
              <p className="card-text">{teamsText.crypto}</p>
              <Link to="/cryptoanalyst">
                <button>View Papers</button>
              </Link>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last Active 2022-2023</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;
