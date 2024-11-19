import { Divider } from "@mui/material";
import CartItem from "./CartItem";
import { Button } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate()
  const handelCheckout = () => {
    navigate("/checkout?step=1")
  }

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item) => (
            <CartItem></CartItem>
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border px-3">
            <p className="uppercase font-bold opacity-60 pb-4 ">
              Price Details
            </p>
            <hr />
            <div className="space-y-3 font-semibold ">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>$667</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600">$667</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Total Amount</span>
                <span>$667</span>
              </div>
            </div>

            <Button onClick={handelCheckout} className="bg-[#9155fd] text-white px-3 py-2 rounded-md w-full mt-6 mb-2">
              CheckOut
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
