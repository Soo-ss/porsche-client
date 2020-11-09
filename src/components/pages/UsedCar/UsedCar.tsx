import React from "react";
import Header from "../../_partials/Header/Header";
import "./usedCarStyle.scss";
import used1 from "../../../images/used1.jpeg";
import used2 from "../../../images/used2.jpeg";
import used3 from "../../../images/used3.jpeg";
import used4 from "../../../images/used4.jpeg";
import used5 from "../../../images/used5.jpeg";
import used6 from "../../../images/used6.jpeg";
import Left from "./Left";
import Right from "./Right";

function UsedCar() {
  return (
    <div>
      <Header />
      <div className="usedContainer">
        <div>
          <img src={used1} alt="used1" />
        </div>
        <div>
          <img src={used2} alt="used2" />
        </div>
        <div className="quad">
          <img src={used3} alt="used3" />
          <img src={used4} alt="used4" />
          <img src={used5} alt="used5" />
          <img src={used6} alt="used6" />
        </div>
      </div>
      <div className="container">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default UsedCar;
