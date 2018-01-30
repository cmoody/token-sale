import React from 'react';

import './style.css';

const Lead = () => (
  <div id="lead">
    <div className="container content">
      <div className="row">
        <div className="col-lg-6">
          <h1>Escrow<br/>for ICO</h1>
          <h2>Incremint solves the ICO credibility<br/> problem with a decentralized escrow system.</h2>
          <button type="button" className="btn btn-info"><i className="fa fa-download" aria-hidden="true"></i> White Paper</button>
        </div>
        <div className="col-lg-6 countdown">
          <h2>Token Sale is Live</h2>
          <h3>Token Sale Ends in:</h3>
          <div className="timer-head-wrapper"><ul className="timer-list"><li className="timer-list__item"><div className="timer-list__item-value timer-days">29</div><div className="timer-list__item-name">days</div></li><li className="timer-list__item"><div className="timer-list__item-value timer-hours">10</div><div className="timer-list__item-name">hours</div></li><li className="timer-list__item"><div className="timer-list__item-value timer-min">17</div><div className="timer-list__item-name">min</div></li><li className="timer-list__item"><div className="timer-list__item-value timer-sec">16</div><div className="timer-list__item-name">sec</div></li></ul></div>
          <div>
            <button className="btn btn-success my-2 my-sm-0" type="submit">Buy Mints</button>
            <p><span className="btn-tip">2000 Mints / 1 ETH</span></p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="bonuses-progress-bar">
            <ul className="bonuses-list">
              <li className="active">2000</li>
              {/* <li className="raised">$20M</li> */}
              {/* <li className="bonus-left">
                <span className="text">Bonus <span className="bonusNumber-day">25%</span> <span className="line-money"></span></span>
              </li> */}
            </ul>
            <div className="soft-cap">
              <div className="text">Feb 5</div>
            </div>
            {/* <div className="separator">
              <div className="text">Largest PropTech ICO<br/><span>(11,731 contributors)</span></div>
            </div>
            <div className="hard-cap">
              <div className="text">$30M<br/><span>Hard Cap</span></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Lead;

// <div class="progress">
//   <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
//   <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
//   <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
// </div>