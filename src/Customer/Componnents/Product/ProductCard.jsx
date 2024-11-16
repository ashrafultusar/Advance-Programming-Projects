const ProductCard = () => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src="https://i.ibb.co.com/fnX19Tx/Front-67eb9273-cc4f-4791-a01e-400a2d8b7817.webp"
          alt=""
        />
      </div>

      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">Zara</p>
          <p>casual puff sleeves solid women shirt</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">$199</p>
          <p className="line-through opacity-50">$220</p>
          <p className="text-green-600 font-semibold">70% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
