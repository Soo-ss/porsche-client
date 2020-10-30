import React from "react";
import "./headerStyle.scss";
import logo from "../../../images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  const lists = [
    {
      goto: "#/",
      title: "모델",
    },
    {
      goto: "usedCar",
      title: "포르쉐 인증 중고차",
    },
    {
      goto: "#/",
      title: "모터 스포츠, 이벤트 및 클럽",
    },
    {
      goto: "#/",
      title: "Services & Accessories",
    },
    {
      goto: "#/",
      title: "포르쉐에 관하여",
    },
    {
      goto: "#/",
      title: "Connect with Porsche - Social Networks",
    },
  ];
  return (
    <div className="container">
      <div className="lined">
        <h1>
          <span>
            <img src={logo} alt="porsche" />
          </span>
        </h1>
      </div>
      <nav className="nav">
        <ul className="clearfix">
          {lists.map((item, index) => {
            return (
              <li>
                <Link to={item.goto}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
