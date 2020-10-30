import React from "react";
import { Link } from "react-router-dom";

interface IProp {
  image: string;
  name: string;
  price: string;
}

function ModelList(props: IProp) {
  return (
    <div className="image-wrapper">
      <img src={props.image} alt="718" />
      <div className="text-wrapper">
        <div className="top">
          <p>{props.name}</p>
          <em>{props.price}</em>
        </div>
        <div className="bottom">
          <ul>
            <li className="black">
              <Link to="#/">
                <i className="fa fa-external-link" aria-hidden="true"></i>
                &nbsp; 나만의 포르쉐 만들기
              </Link>
            </li>
            <li className="white">
              <Link to="#/">
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                &nbsp; 모든 모델
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ModelList;
