import { IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@headlessui/react";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[6rem] h-[6rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://i.ibb.co.com/m0WDT9D/pexels-cottonbro-4065145.jpg"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">title line here</p>
          <p className="opacity-70">size here</p>
          <p className="opacity-70 mt-2">Seller: </p>

          <div className="flex space-x-5 items-center text-gray-900 mt-10">
            <p className="font-semibold">$199</p>
            <p className="opacity-50 line-through">$299</p>
            <p className="text-green-600 font-semibold">50%</p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-2">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton>
            <AddCircleOutlineIcon />
          </IconButton>
          <Button className="text-red-500">remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
