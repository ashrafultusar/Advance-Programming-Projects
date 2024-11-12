import "./App.css";
import Navbar from "./Customer/Componnents/Navigations/Navbar";
import HomePage from "./Customer/Pages/HomePage/HomePage";
import Footer from "./Customer/Componnents/Footer/Footer";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <div>
        <HomePage></HomePage>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
