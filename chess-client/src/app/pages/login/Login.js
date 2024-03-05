import React from "react";
import Input from "../../component/input/input";
import Button from "../../component/button/button";
import "./Login.css";
import "../../global.css";
export const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login">
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

            <a href="/" className="small">
              Sign up
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
};
