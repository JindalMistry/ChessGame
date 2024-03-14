import React, { useState } from "react";
import Input from "../../component/input/input";
import Button from "../../component/button/button";
import "./Login.css";
import "../../global.css";
import { useTheme } from "../../context/ThemeContext";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginUser } from "../../services/user-service";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/slices/userSlice";
import axios from "axios";

export const Login = () => {
  const dispatch = useDispatch();
  const { isDarkTheme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const onLoginUser = () => {
    LoginUser({ email, password })
      .then((res) => {
        if (res.status === 200) {
          alert(res.data.message);
          Navigate("/");
          dispatch(addUser(res.data));
          setEmail("");
          setPassword("");
          axios.interceptors.request.use(function (config) {
            const token = res.data.token;
            config.headers.Authorization = `Bearer ${token}`;
            return config;
          });
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={isDarkTheme ? "login-wrapper-dark" : "login-wrapper-light"}>
      <div className="login shadowed">
        <header className="header ">
          <h1>Sign in</h1>
        </header>
        <div className="content">
          <Input
            value={email}
            placeholder={"Email"}
            className={"w-90p py-05 input primaryborder"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            value={password}
            placeholder={"Password"}
            className={"w-90p py-05 input primaryborder"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <footer className="footer">
          <Button
            className={"w-90p py-05 button"}
            background={"primary"}
            variant={"shadowed"}
            onClick={onLoginUser}
          />
          <span>
            <p className="small">Haven’t created an account?</p>
            &nbsp;
            <NavLink to="/register" className="small">
              Sign up
            </NavLink>
          </span>
        </footer>
      </div>
    </div>
  );
};
