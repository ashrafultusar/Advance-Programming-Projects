import "./App.css";
import Navbar from "./Customer/Componnents/Navigations/Navbar";
import HomePage from "./Customer/Pages/HomePage/HomePage";
import Footer from "./Customer/Componnents/Footer/Footer";
import Product from "./Customer/Componnents/Product/Product";
import ProductDetails from "./Customer/Componnents/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="">
        {/* <HomePage></HomePage> */}
        {/* <Product></Product> */}
        <ProductDetails></ProductDetails>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
