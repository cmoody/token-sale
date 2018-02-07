import React from 'react';

import './style.css';

const Comparison = () => (
  <div id="comparison">
    <div className="container">
      <div className="tbl">
        <div className="features">
          <h1>Features</h1>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
        <div className="product">
          <h1>[SITE_NAME]</h1>
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
          <button className="btn btn-success my-2 my-sm-0" type="submit">Buy Tokens</button>
        </div>
        <div className="competitor">
          <h1>Competitor</h1>
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

export default Comparison;