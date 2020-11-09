import React, { useState } from "react";
import Header from "../../_partials/Header/Header";
import Footer from "../../_partials/Footer/Footer";
import "./registerStyle.scss";
import { Link, RouteComponentProps } from "react-router-dom";
import Axios from "axios";

function Register(props: RouteComponentProps) {
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [CheckPassword, setCheckPassword] = useState("");

  const onEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onCheckPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckPassword(event.target.value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Password !== CheckPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }

    const info = {
      email: Email,
      name: Name,
      password: Password,
    };

    Axios.post("/api/user/register", info).then((res) => {
      console.log(res.data);
      if (res.data.success) {
        alert("회원가입이 완료되었습니다~");
        props.history.push("/login");
      } else {
        alert("회원가입에 실패했습니다.");
      }
    });
  };
  return (
    <div>
      <Header />
      <div className="form">
        <h1>Register</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="이메일"
            required={true}
            value={Email}
            onChange={onEmail}
          />
          <input
            type="text"
            placeholder="이름"
            required={true}
            value={Name}
            onChange={onName}
          />
          <input
            type="password"
            placeholder="비밀번호"
            required={true}
            value={Password}
            onChange={onPassword}
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            required={true}
            value={CheckPassword}
            onChange={onCheckPassword}
          />
          <button>register</button>
          <p className="message">
            이미 회원이신가요? <Link to="/login">로그인</Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
