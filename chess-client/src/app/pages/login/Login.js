import React from "react";
import Input from "../../component/input/input";
import Button from "../../component/button/button";
import "./Login.css";
import "../../global.css";
import { useTheme } from "../../context/ThemeContext";

export const Login = () => {
  const { isDarkTheme } = useTheme();
  return (
    <div className={isDarkTheme ? "login-wrapper-dark" : "login-wrapper-light"}>
      <div className="login shadowed">
        <header className="header ">
          <h1>Sign in</h1>
        </header>
        <div className="content">
          <Input
            placeholder={"Email"}
            className={"w-90p py-05 input primaryborder"}
          />
          <Input
            placeholder={"Password"}
            className={"w-90p py-05 input primaryborder"}
          />
        </div>
        <footer className="footer">
          <Button
            className={"w-90p py-05 button"}
            background={"primary"}
            variant={"shadowed"}
          />
          <span>
            <p className="small">Haven’t created an account?</p>
            &nbsp;
            <a href="/register" className="small">
              Sign up
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
};
