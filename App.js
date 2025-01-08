import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header";
import { Outlet } from "react-router-dom";
import CountryDetail from "./Component/CountryDetail";
function App() {
  
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
