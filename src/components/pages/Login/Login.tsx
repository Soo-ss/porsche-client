import React, { useState } from "react";
import Header from "../../_partials/Header/Header";
import Footer from "../../_partials/Footer/Footer";
import { Link, RouteComponentProps } from "react-router-dom";
import Axios from "axios";

function Login(props: RouteComponentProps) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const info = {
      email: Email,
      password: Password,
    };

    Axios.post("/api/user/login", info).then((res) => {
      console.log(res.data);
      if (res.data.success) {
        alert("로그인에 성공하였습니다.");
        props.history.push("/");
      } else {
        alert("로그인에 실패했습니다.");
      }
    });
  };
  return (
    <div>
      <Header />
      <div className="form">
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="이메일"
            value={Email}
            onChange={onEmail}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={Password}
            onChange={onPassword}
          />
          <button>login</button>
          <p className="message">
            아직 회원이 아니신가요? <Link to="/register">회원가입</Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
