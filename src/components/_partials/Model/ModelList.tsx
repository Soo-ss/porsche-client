import React from "react";

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
              <a href="#/">
                <i className="fa fa-external-link" aria-hidden="true"></i>
                &nbsp; 나만의 포르쉐 만들기
              </a>
            </li>
            <li className="white">
              <a href="#/">
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                &nbsp; 모든 모델
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ModelList;
