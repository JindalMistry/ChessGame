import { ThemeProvider } from "./app/context/ThemeContext";
import Hero from "./app/pages/landing-page/landing-page";
import { Login } from "./app/pages/login/Login";
import Register from "./app/pages/register/Register";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Hero />
        {/* <Login /> */}
        {/* <Register /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
