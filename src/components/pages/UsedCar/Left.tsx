import React from "react";
import approved from "../../../images/approved.png";

function Left() {
  return (
    <div className="left">
      <h2>Panamera GTS</h2>
      <img src={approved} alt="approved" />
      <div style={{ padding: "10px 0" }}>
        <p>
          Dealer:&nbsp;<a href="#/">Porsche Pre-Owned Car Centre Yangjae</a>
        </p>
      </div>
      <div className="info">
        <div>
          <p>출력</p>
          <span>338 kW</span>
        </div>
        <div>
          <p>주행 거리</p>
          <span>8,300 km</span>
        </div>
        <div>
          <p>등록일</p>
          <span>2020-03</span>
        </div>
        <div>
          <p>연식</p>
          <span>2020</span>
        </div>
      </div>
      <em>VIN: WP0AG2975LL146182</em>
    </div>
  );
}

export default Left;
