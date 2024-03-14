import React, { useEffect, useState } from "react";
import "./Register.css";
import Input from "../../component/input/input";
import Button from "../../component/button/button";
import "../../global.css";
import { useTheme } from "../../context/ThemeContext";
import { RegisterUser } from "../../services/user-service";
import { NavLink, useNavigate } from "react-router-dom";

export default function Register() {
  const { isDarkTheme } = useTheme();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const onRegisterClick = () => {
    RegisterUser({ username, email, password })
      .then((res) => {
        if (res.status === 201) {
          alert(res.data.message);
          setUsername("");
          setEmail("");
          setPassword("");
          Navigate("/login");
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

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
            value={username}
            className={"w-90p py-05 input primaryborder"}
            border={"primary"}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Input
            placeholder={"Email"}
            value={email}
            className={"w-90p py-05 input primaryborder"}
            border={"primary"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            placeholder={"Password"}
            value={password}
            className={"w-90p py-05 input primaryborder"}
            border={"primary"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <footer className="footer">
          <Button
            label={"Sign up"}
            className={"w-90p py-05 button"}
            background={"primary"}
            variant={"shadowed"}
            onClick={onRegisterClick}
          />
          <span>
            <p className="small">Already have an account?</p>

            <NavLink to="/login" className="small">
              Sign in
            </NavLink>
          </span>
        </footer>
      </div>
    </div>
  );
}
