import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header";
import { Outlet } from "react-router-dom";
import "./App.css";
import ThemeContext from "./Contexts/ThemeContext";
function App() {
  

  return (
    <ThemeContext>
      <Header  />
      <Outlet  />
    </ThemeContext>
  );
}

export default App;
