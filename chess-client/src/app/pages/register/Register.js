import React from "react";
import "./Register.css";
import Input from "../../component/input/input";
import Button from "../../component/button/button";
import "../../global.css";
import { useTheme } from "../../context/ThemeContext";

export default function Register() {
  const { isDarkTheme } = useTheme();
  return (
    <div
      className={
        isDarkTheme ? "register-wrapper-dark" : "register-wrapper-light"
      }
    >
      <div className="register shadowed">
        <header className="header ">
          <h1>Sign up</h1>
        </header>
        <div className="content">
          <Input
            placeholder={"Username"}
            className={"w-90p py-05 input primaryborder"}
            border={"primary"}
          />
          <Input
            placeholder={"Email"}
            className={"w-90p py-05 input primaryborder"}
            border={"primary"}
          />
          <Input
            placeholder={"Password"}
            className={"w-90p py-05 input primaryborder"}
            border={"primary"}
          />
        </div>
        <footer className="footer">
          <Button
            className={"w-90p py-05 button"}
            background={"primary"}
            variant={"shadowed"}
          />
          <span>
            <p className="small">Already have an account?</p>

            <a href="/" className="small">
              Sign in
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
}
