import React from 'react';
import Carousel from '../../Componnents/HomeCarousel/Carousel';
import HomeSectionCarousel from '../../Componnents/HomeSectionCarousel/HomeSectionCarousel';

const HomePage = () => {
    return (
        <div>
            <Carousel></Carousel>
            <div className='space-y-10 py-20 flex flex-col justify-center'>
                <HomeSectionCarousel></HomeSectionCarousel>
                <HomeSectionCarousel></HomeSectionCarousel>
                <HomeSectionCarousel></HomeSectionCarousel>
            </div>
        </div>
    );
};

export default HomePage;