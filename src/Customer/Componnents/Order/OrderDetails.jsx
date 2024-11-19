import { Grid2 } from "@mui/material";
import AdressCard from "../AdressCard/AdressCard";
import OrderTraker from "./OrderTraker";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AdressCard></AdressCard>
      </div>
      <div className="py-20">
        <OrderTraker activeStep={3}></OrderTraker>
      </div>

      <Grid2 className="space-y-5" container>
        {[1, 1, 1, 1].map((item) => (
          <div
          className="shadow-lg hover:shadow-2xl rounded-lg p-4 border bg-white w-full max-w-[95%] mx-auto mb-4"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {/* Left Section: Product Image and Details */}
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <img
              className="w-[5rem] h-[5rem] object-cover rounded"
              src="https://i.ibb.co.com/tB1p6Zm/Front-67eb9273-cc4f-4791-a01e-400a2d8b7817.webp"
              alt="Product"
            />
            <div className="ml-4 space-y-2" style={{ flex: "1" }}>
              <p className="font-semibold text-sm truncate">
                Men Slim Mid Rise Black Jeans
              </p>
              <p className="text-xs opacity-70">
                <span>Color: pink</span> <span className="ml-4">Size: M</span>
              </p>
              <p className="text-xs">Seller: linaria</p>
              <p className="text-sm font-bold">₹1099</p>
            </div>
          </div>
          {/* Right Section: Rate & Review */}
          <div
            className="ml-4"
            style={{ display: "flex", alignItems: "center", color: deepPurple[500] }}
          >
            <StarBorderIcon sx={{ fontSize: "1.8rem" }} />
            <span className="ml-2 text-sm font-medium cursor-pointer">
              Rate & Review Product
            </span>
          </div>
        </div>
        
        ))}
      </Grid2>
    </div>
  );
};

export default OrderDetails;
