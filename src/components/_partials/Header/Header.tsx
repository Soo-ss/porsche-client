import React, { useState } from "react";
import "./headerStyle.scss";
import logo from "../../../images/logo.svg";
import { Link } from "react-router-dom";
import Axios from "axios";

function Header() {
  const [Me, setMe] = useState("");
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
    {
      goto: "login",
      title: "Login",
    },
    {
      goto: "register",
      title: "Register",
    },
    {
      goto: "me",
      title: "My Page",
    },
    {
      goto: "logout",
      title: "Logout",
    },
  ];

  Axios.get("/api/user/auth").then((res) => {
    setMe(res.data.isAuth);
  });

  return (
    <div className="container">
      <div className="lined">
        <h1>
          <span>
            <Link to="/">
              <img src={logo} alt="porsche" />
            </Link>
          </span>
        </h1>
      </div>
      <nav className="nav">
        <ul className="clearfix">
          {lists.map((item, index) => {
            // logout
            // usedCar, logout, me제외
            if (!Me) {
              if (
                item.goto === "usedCar" ||
                item.goto === "logout" ||
                item.goto === "me"
              ) {
                return false;
              }
            }
            // login
            // login, register제외
            else {
              if (item.goto === "login" || item.goto === "register") {
                return false;
              }
            }
            return (
              <li key={index}>
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
