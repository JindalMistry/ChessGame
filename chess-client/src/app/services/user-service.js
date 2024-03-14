import axios from "axios";

export const RegisterUser = (obj) => {
  let apiUrl = "user/register";
  return axios.post(apiUrl, obj);
};

export const LoginUser = (obj) => {
  let apiUrl = "user/login";
  return axios.post(apiUrl, obj);
};

export const LogoutUser = (id) => {
  let apiUrl = "user/logout/" + id;
  return axios.get(apiUrl);
};
