import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRef, useState } from "react";

const HomeSectionCarousel = ({ data,sectionName }) => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const carouselRef = useRef(null);

  const handlePrev = () => {
    carouselRef.current?.slidePrev();
  };

  const handleNext = () => {
    carouselRef.current?.slideNext();
  };

  const items = data
    .slice(0, 12)
    .map((item) => <HomeSectionCard key={item} product={item} />);

  return (
      <div className="container mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-800 py-5">{ sectionName}</h2>
      <div className="relative">
        {/* Button Wrapper */}
        <div className="absolute -top-14 right-2 flex gap-2 z-50">
          {/* Previous Button */}
          <button
            className="bg-green-500 hover:bg-[#FFC107] rounded-lg px-3 py-1 shadow-lg"
            onClick={handlePrev}
          >
            <KeyboardArrowLeftIcon />
          </button>
          {/* Next Button */}
          <button
            className="bg-green-500 hover:bg-[#FFC107] rounded-lg px-3 shadow-lg"
            onClick={handleNext}
          >
            <KeyboardArrowRightIcon />
          </button>
        </div>

        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          ref={carouselRef}
        />
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
