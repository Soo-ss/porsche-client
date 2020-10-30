import React from "react";
// import "./headerStyle.scss";
import logo from "../../../images/logo.svg";
import { Link } from "react-router-dom";
import styled from "../../../styles/themeComponents";

const Container = styled.div`
  position: relative;
  width: 1400px;
  margin: 0 auto;
`;

const Lined = styled.div`
  position: relative;
  text-align: center;
  &::before {
    content: "";
    border-bottom: 1px solid #e3e4e4;
    position: absolute;
    bottom: 2px;
    right: 0;
    left: 2px;
    height: 1px;
    overflow: hidden;
    z-index: -1;
  }
`;

const Imgwrap = styled.span`
  padding: 0 8px 0 8px;
  background-color: #fff;
`;

const Img = styled.img`
  width: 127px;
  height: 75px;
  transform: translate3d(0, 19px, 0);
`;

function Header() {
  return (
    <Container>
      <Lined>
        <Imgwrap>
          <Img src={logo} alt="porsche" />
        </Imgwrap>
      </Lined>
      <nav className="nav">
        <ul className="clearfix">
          <li>
            <a href="#/">모델</a>
          </li>
          <li>
            <Link to="usedCar">포르쉐 인증 중고차</Link>
          </li>
          <li>
            <a href="#/">모터 스포츠, 이벤트 및 클럽</a>
          </li>
          <li>
            <a href="#/">Services & Accessories</a>
          </li>
          <li>
            <a href="#/">포르쉐에 관하여</a>
          </li>
          <li>
            <a href="#/">Connect with Porsche - Social Networks</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Header;
