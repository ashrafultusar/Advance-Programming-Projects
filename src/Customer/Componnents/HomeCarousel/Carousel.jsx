
import AliceCarousel from "react-alice-carousel"; 
import { CarouselData } from "./CarouselData";
import 'react-alice-carousel/lib/alice-carousel.css';

const Carousel = () => {
  const items = CarouselData.map((item) => (
    <img
      key={item.image}
      className="w-full md:h-[620px] lg:h-[720px] object-cover  cursor-pointer -z-10"
      role="presentation"
      src={item.image}
      alt="carousel-item"
    />
  ));

  return (
      <div className="w-full overflow-hidden">
          

          
      <AliceCarousel  
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
      />
    </div>
  );
};

export default Carousel;
