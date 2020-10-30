import React from "react";
import Header from "../../_partials/Header/Header";
import "./usedCarStyle.scss";
import used1 from "../../../images/used1.jpeg";
import used2 from "../../../images/used2.jpeg";
import used3 from "../../../images/used3.jpeg";
import used4 from "../../../images/used4.jpeg";
import used5 from "../../../images/used5.jpeg";
import used6 from "../../../images/used6.jpeg";
import approved from "../../../images/approved.png";

function UsedCar() {
  return (
    <div>
      <Header />
      <div className="usedContainer">
        <div>
          <img src={used1} alt="used1" />
        </div>
        <div>
          <img src={used2} alt="used1" />
        </div>
        <div className="quad">
          <img src={used3} alt="used1" />
          <img src={used4} alt="used1" />
          <img src={used5} alt="used1" />
          <img src={used6} alt="used1" />
        </div>
      </div>
      <div className="container">
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
        <div className="right">
          <p style={{ fontSize: "36px", fontWeight: "bold" }}>￦209,000,000</p>
          <p style={{ fontSize: "12px", color: "#959899" }}>비면세 차량</p>
          <button>
            <i className="fa fa-angle-right" aria-hidden="true"></i>연락처
          </button>
        </div>
      </div>
    </div>
  );
}

export default UsedCar;
