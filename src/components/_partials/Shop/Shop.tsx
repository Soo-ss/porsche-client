import React from "react";
import "./shopStyle.scss";

function Shop() {
  return (
    <div className="shop">
      <div className="container">
        <h2>Shopping Tools</h2>
        <div className="image-total">
          <div className="image-wrapper">
            <div className="image-box1">image1</div>
          </div>
          <div className="image-wrapper">
            <div className="image-box2">image2</div>
          </div>
          <div className="image-wrapper">
            <div className="image-box3">image3</div>
          </div>
          <div className="image-wrapper">
            <div className="image-box4">image4</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
