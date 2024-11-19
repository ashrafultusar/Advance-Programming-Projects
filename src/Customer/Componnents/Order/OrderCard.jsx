import React from "react";
import { Grid2 } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate=useNavigate()
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-lg hover:shadow-2xl border">
      <Grid2 container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid2 item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://i.ibb.co.com/m0WDT9D/pexels-cottonbro-4065145.jpg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p>titel is here bro</p>
              <p className="opacity-50 text-xs font-semibold">size: M</p>
              <p className="opacity-50 text-xs font-semibold">color: black</p>
            </div>
          </div>
        </Grid2>

        <Grid2 item xs={2}>
          <p>$566</p>
        </Grid2>
        <Grid2 item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered on March 3</span>
              </p>
              <p className="text-sm">your item has been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery On March 3</span>
            </p>
          )}
        </Grid2>
      </Grid2>
    </div>
  );
};

export default OrderCard;
