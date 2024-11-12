import { Home } from "@mui/icons-material";
import "./App.css";
import Navbar from "./Customer/Componnents/Navigations/Navbar";
import HomePage from "./Customer/Pages/HomePage/HomePage";

function App() {
  return (
    <div className="">
     <Navbar></Navbar>
      <div>
        <HomePage></HomePage>
      </div>

    </div>
  );
}

export default App;
