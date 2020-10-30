import React from "react";
import "./listStyle.scss";

function List() {
  return (
    <div>
      <div className="container">
        <div className="list">
          <div>
            <h2>Build & Find</h2>
            <ul>
              <li>
                <a href="#/">나만의 포르쉐 만들기</a>
              </li>
              <li>
                <a href="#/">포르쉐 인증 중고차 찾기</a>
              </li>
              <li>
                <a href="#/">포르쉐 센터 찾기</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>온라인 서비스</h2>
            <ul>
              <li>
                <a href="#/">Porsche Financial Services</a>
              </li>
              <li>
                <a href="#/">뉴스 가입</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Behind the Scenes</h2>
            <ul>
              <li>
                <a href="#/">Passion Motorsports</a>
              </li>
              <li>
                <a href="#/">Porsche Classic</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Porsche Company</h2>
            <ul>
              <li>
                <a href="#/">At a Glance</a>
              </li>
              <li>
                <a href="#/">Responsibility</a>
              </li>
              <li>
                <a href="#/">Jobs & Careers</a>
              </li>
              <li>
                <a href="#/">Contact & Information</a>
              </li>
              <li>
                <a href="#/">Christophorus - The Porsche Magazine</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
