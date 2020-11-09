import React, { useState, useEffect } from "react";
import Header from "../../_partials/Header/Header";
import Footer from "../../_partials/Footer/Footer";
import Axios from "axios";
import "./myPageStyle.scss";

function MyPage() {
  const [UserInfo, setUserInfo] = useState({
    id: "",
    isAuth: false,
    email: "",
    name: "",
    modelName: "",
    schoolName: "",
    dept: "",
    phone: "",
    createdAt: "",
    updatedAt: "",
    success: false,
  });
  useEffect(() => {
    Axios.get("/api/user/auth")
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          setUserInfo((UserInfo) => res.data);
        } else {
          alert("내 정보 가져오기 실패!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("My Page", UserInfo.updatedAt);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="myPage">
          <h1>My Page</h1>
          <ul>
            <li>{UserInfo.email}</li>
            <li>{UserInfo.name}</li>
            <li>{UserInfo.modelName}</li>
            <li>{UserInfo.schoolName}</li>
            <li>{UserInfo.dept}</li>
            <li>{UserInfo.phone}</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyPage;
