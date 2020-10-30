import React from "react";
import "./shopStyle.scss";

function Shop() {
  return (
    <div className="shop">
      <div className="container">
        <h2>Shopping Tools</h2>
        <div className="image-total">
          <div className="image-wrapper">
            <div className="image-box1"></div>
          </div>
          <div className="image-wrapper">
            <div className="image-box2"></div>
          </div>
          <div className="image-wrapper">
            <div className="image-box3"></div>
          </div>
          <div className="image-wrapper">
            <div className="image-box4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
