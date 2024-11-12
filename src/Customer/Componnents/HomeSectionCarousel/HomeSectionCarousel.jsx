// import AliceCarousel from "react-alice-carousel";
// import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


// const responsive = {
//   0: { items: 1 },
//   720: { items: 3 },
//   1024: { items: 5.5 },
// };

// const items = [1, 2, 3, 4, 5].map((item) => (
//   <HomeSectionCard></HomeSectionCard>
// ));

// const HomeSectionCarousel = () => {
//   return (
//     <div className="container mx-auto">
//       <div className="relative">
//         <AliceCarousel
//           items={items}
//           disableButtonsControls
//           infinite
//           responsive={responsive}
//               />
//               <button variant='contained' className="z-50" sx={{position: 'absolute', top:'8rem', right:'0rem'}} color="white" aria-label="next">
//                  < KeyboardArrowLeftIcon/>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCarousel;

import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'; // Import the right arrow icon
import { useRef } from "react";

const responsive = {
  0: { items: 1 },
  720: { items: 3 },
  1024: { items: 5.5 },
};

const items = [1, 2, 3, 4, 5].map((item) => (
  <HomeSectionCard key={item} />
));

const HomeSectionCarousel = () => {
  const carouselRef = useRef(null); // Create a ref for the carousel

  const handlePrev = () => {
    carouselRef.current?.slidePrev(); // Slide to the previous item
  };

  const handleNext = () => {
    carouselRef.current?.slideNext(); // Slide to the next item
  };

  return (
    <div className="container mx-auto">
      <div className="relative ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
          ref={carouselRef} // Attach the ref to the carousel
        />
        {/* Previous Button */}
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-2 z-50 bg-white rounded-full p-2 shadow-lg"
          onClick={handlePrev}
        >
          <KeyboardArrowLeftIcon />
        </button>
        {/* Next Button */}
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-2 z-50 bg-white rounded-full p-2 shadow-lg"
          onClick={handleNext}
        >
          <KeyboardArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
