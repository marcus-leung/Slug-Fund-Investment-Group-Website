import React from "react";
import { Link } from "react-router-dom";
import EA from "../assets/EquityAnalyst.jpg";
import VA from "../assets/VentureAnalyst.jpg";
import CA from "../assets/CryptoAnalyst.jpg";

function Teams() {
  return (
    <div className="teams">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-5">
            <h1>Teams</h1>
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
              <p className="card-text">
                The Equity Analyst team focuses on researching and analyzing
                public companies. We conduct fundamental analysis and produce
                research reports and stock pitches that we share with the club.
              </p>
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
              <p className="card-text">
                The Venture Analyst team focuses on researching and evaluating
                startups. We write investment memos and share our learnings with
                the club. As a team, we work together to construct a Fantasy VC
                portfolio.
              </p>
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
              <p className="card-text">
                The Crypto Analyst team is a group dedicated to researching and
                educating others about decentralized finance. Join us to explore
                the revolutionary world of cryptocurrencies and shape the future
                of finance.
              </p>
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
