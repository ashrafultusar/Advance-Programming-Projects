// import { Grid2 } from "@mui/material";
// import OrderCard from "./OrderCard";

// const orderStatus = [
//   { lable: "On The Way", value: "on the way" },
//   { lable: "Delivered", value: "delivered" },
//   { lable: "Canceled", value: "Canceled" },
//   { lable: "Returned", value: "returned" },
// ];

// const Order = () => {
//   return (
//     <div className="px-5 lg:px-20">
//       <Grid2 container sx={{ justifyContent: "space-between" }}>
//         <Grid2 item xs={2.5}>
//           <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
//             <h1 className="font-bold text-lg">Filter</h1>
//             <div className="space-y-4 mt-10">
//               <h1 className="font-semibold">ORDER STATUS</h1>

//               {orderStatus.map((option) => (
//                 <div className="flex items-center">
//                   <input
//                     defaultValue={option.value}
//                     type="checkbox"
//                     className="h-4 w-4 border-gray-300 text-indigo-500 focus:ring-indigo-500"
//                   />
//                   <lable htmlFor={option.value}></lable>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </Grid2>
//         <Grid2 item xs={9}>
//           <div className="space-y-4">
//             {[1, 1, 1, 1].map((item) => (
//               <OrderCard></OrderCard>
//             ))}
//           </div>
//         </Grid2>
//       </Grid2>
//     </div>
//   );
// };

// export default Order;
import {  Grid2 } from "@mui/material";
import OrderCard from "./OrderCard";

const orderStatus = [
  { label: "On The Way", value: "on the way" },
  { label: "Delivered", value: "delivered" },
  { label: "Canceled", value: "canceled" },
  { label: "Returned", value: "returned" },
];

const Order = () => {
  return (
    <div className="px-5 lg:px-20">
      <Grid2 container spacing={2}>
        {/* Filter Section: 1/3 of the screen */}
        <Grid2 item xs={12} md={4}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">ORDER STATUS</h1>

              {orderStatus.map((option) => (
                <div key={option.value} className="flex items-center">
                  <input
                    id={option.value}
                    value={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-500 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={option.value}
                    className="ml-2 text-gray-700"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid2>

        {/* Cards Section: 2/3 of the screen */}
        <Grid2 item xs={12} md={8}>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item, index) => (
              <OrderCard key={index} />
            ))}
          </div>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Order;
