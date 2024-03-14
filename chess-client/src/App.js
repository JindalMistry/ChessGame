import { ThemeProvider } from "./app/context/ThemeContext";
import Hero from "./app/pages/landing-page/landing-page";
import { Login } from "./app/pages/login/Login";
import Register from "./app/pages/register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import LocalMultiplayer from "./app/pages/local-multiplayer/local-multiplayer";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={user ? <Hero /> : <Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route
              exact
              path="/local-multiplayer"
              element={<LocalMultiplayer />}
            />
          </Routes>
          <Routes>
            {/* <Route exact path="/login" element={<Login />} /> */}
          </Routes>
          <Routes>
            {/* <Route exact path="/register" element={<Register />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
