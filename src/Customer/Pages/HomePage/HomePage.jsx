import React from 'react';
import Carousel from '../../Componnents/HomeCarousel/Carousel';
import HomeSectionCarousel from '../../Componnents/HomeSectionCarousel/HomeSectionCarousel';
import { mens_kurta } from '../../../Data/MensKurta';

const HomePage = () => {
    return (
        <div>
            <Carousel></Carousel>
            <div className='space-y-10 py-20 flex flex-col justify-center'>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}></HomeSectionCarousel>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}></HomeSectionCarousel>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"}></HomeSectionCarousel>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"}></HomeSectionCarousel>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"}></HomeSectionCarousel>
                
            </div>
        </div>
    );
};

export default HomePage;