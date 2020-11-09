import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import Axios from "axios";

const Auth = (WrappedComponent: any, option: Boolean | null) => {
  // 반드시 대문자
  const AuthCheck = (props: RouteComponentProps) => {
    useEffect(() => {
      Axios.get("/api/user/auth").then((res) => {
        console.log(res.data);

        // 로그인 안된 유저
        if (!res.data.success) {
          if (option) {
            props.history.push("/login");
          }
        }
        // 로그인 된 유저
        else {
          if (!option) {
            props.history.push("/");
          }
        }
      });
    }, [props.history]);
    return <WrappedComponent />;
  };
  return AuthCheck;
};

export default Auth;
