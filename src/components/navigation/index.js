import React from 'react';

import './style.css';

import logo from '../../assets/img/ether_icon.png';

const Navigation = () => (
  <nav className="navbar navbar-expand-lg fixed-top navbar-dark" id="navigation">
    <a className="navbar-brand" href="/">
      <img src={logo} alt="SITE_NAME" className="rounded-circle"/>
      [SITE_NAME]
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Token Sale</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">White Paper</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Roadmap</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Team</a>
        </li>
      </ul>
      <div className="nav-sec my-2 my-lg-0">
        <i className="fa fa-telegram" aria-hidden="true"></i>
        <button className="btn btn-success my-2 my-sm-0" type="submit">Buy Tokens</button>
      </div>
    </div>
  </nav>
);

export default Navigation;