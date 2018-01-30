import React from 'react';

import './style.css';

const Daico = () => (
  <div id="daico">
    <div className="container">
      <div className="tbl">
        <div className="features">
          <h1>Features</h1>
          <ul>
            <li>Investors Control Release of Funds</li>
            <li>Investors Can Force Return of Funds</li>
            <li>Funds Released Over Time</li>
            <li>Issuers Set Milestones</li>
            <li>Hosted Investor Comminication Space</li>
            <li>Fiat Escrow</li>
            <li>Standardized Voting Mechanism</li>
            <li>Established Investor Community</li>
            <li>Turnkey Implementation</li>
            <li>Money Delivered in Tranches</li>
            <li>Issuers Can Seek Revisions of Milestones</li>
            <li>Resolution In Case of Deadlock</li>
          </ul>
        </div>
        <div className="incremint">
          <h1>Incremint</h1>
          <ul className="check-list">
            <li><i class="fa fa-check" aria-hidden="true"></i></li>
            <li><i class="fa fa-check" aria-hidden="true"></i></li>
            <li><i class="fa fa-check" aria-hidden="true"></i></li>
            <li><i class="fa fa-check" aria-hidden="true"></i></li>
            <li><i class="fa fa-check" aria-hidden="true"></i></li>
            <li><i class="fa fa-check" aria-hidden="true"></i></li>
            <li><i class="fa fa-check" aria-hidden="true"></i></li>
            <li><i class="fa fa-check" aria-hidden="true"></i></li>
            <li><i class="fa fa-check" aria-hidden="true"></i></li>
            <li><i class="fa fa-check" aria-hidden="true"></i></li>
            <li><i class="fa fa-check" aria-hidden="true"></i></li>
            <li><i class="fa fa-check" aria-hidden="true"></i></li>
          </ul>
          <button className="btn btn-success my-2 my-sm-0" type="submit">Buy Mints</button>
        </div>
        <div className="daico">
          <h1>DAICO</h1>
          <ul className="check-list">
            <li><i class="fa fa-check" aria-hidden="true"></i></li>
            <li><i class="fa fa-check" aria-hidden="true"></i></li>
            <li><i class="fa fa-check" aria-hidden="true"></i></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Daico;