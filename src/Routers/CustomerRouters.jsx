import { Route, Routes } from "react-router-dom";
import HomePage from "../Customer/Pages/HomePage/HomePage";
import Cart from "../Customer/Componnents/Cart/Cart";
import Navbar from "../Customer/Componnents/Navigations/Navbar";
import Footer from "../Customer/Componnents/Footer/Footer";
import Product from "../Customer/Componnents/Product/Product";
import ProductDetails from "../Customer/Componnents/ProductDetails/ProductDetails";
import Checkout from "../Customer/Componnents/Checkout/Checkout";
import Order from "../Customer/Componnents/Order/Order";
import OrderDetails from "../Customer/Componnents/Order/OrderDetails";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/:lavelOne/:lavelTwo/:lavelThre" element={<Product></Product>}></Route>
        <Route path="/product/:productId" element={<ProductDetails></ProductDetails>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="/account/order" element={<Order></Order>}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails></OrderDetails>}></Route>

       
    

        {/* <Order></Order> */}
        {/* <OrderDetails></OrderDetails> */}
      </Routes>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default CustomerRouters;
