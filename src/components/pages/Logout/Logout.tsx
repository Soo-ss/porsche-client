import React, { useEffect } from "react";
import Axios from "axios";
import { RouteComponentProps, withRouter } from "react-router-dom";

function Logout(props: RouteComponentProps) {
  useEffect(() => {
    Axios.get("/api/user/logout").then((res) => {
      if (res.data.success) {
        alert("로그아웃 하셨습니다.");
        props.history.push("/");
      } else {
        alert("로그아웃 실패");
      }
    });
  }, [props.history]);
  return <div></div>;
}

export default withRouter(Logout);
