import React, { useState } from "react";
import FormSection from "./FormSection";

function Right() {
  const [Sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!Sidebar);
  return (
    <div className="right">
      <p style={{ fontSize: "36px", fontWeight: "bold" }}>￦209,000,000</p>
      <p style={{ fontSize: "12px", color: "#959899" }}>비면세 차량</p>
      <button className="carButton" onClick={showSidebar}>
        <i className="fa fa-angle-right" aria-hidden="true"></i>연락처
      </button>
      {/* sidebar */}
      <nav className={Sidebar ? "side-nav on" : "side-nav"}>
        <div style={{ padding: "30px" }}>
          <h2>
            Your Inquiry to Porsche Pre-Owned Car
            <i
              onClick={showSidebar}
              className="fa fa-angle-right"
              aria-hidden="true"
            />
            <br />
            Centre Yangjae
          </h2>
          <p>Write a message or call your dealer directly</p>
        </div>
        <div className="bottom">
          <h2>Contact Data</h2>
          <p>개인 정보를 입력해주세요</p>
          <FormSection />
        </div>
      </nav>
    </div>
  );
}

export default Right;
