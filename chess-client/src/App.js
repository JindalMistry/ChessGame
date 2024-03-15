import { ThemeProvider } from "./app/context/ThemeContext";
import Hero from "./app/pages/landing-page/landing-page";
import { Login } from "./app/pages/login/Login";
import Register from "./app/pages/register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "./app/pages/profile/profile";
import { useEffect } from "react";
import axios from "axios";
import LocalMultiplayer from "./app/pages/local-multiplayer/local-multiplayer";

function App() {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios.interceptors.request.use(function (config) {
      config.baseURL = "http://localhost:4000/";
      return config;
    });
  }, []);
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={user ? <Hero /> : <Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/local-multiplayer" element={<LocalMultiplayer />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
