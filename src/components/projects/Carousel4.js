import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../images/project4_1.png';

const Carousel1 = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} alt='' />
                <p
                    className='legend'
                    style={{ opacity: '0.7', fontSize: '16px' }}
                >
                    Dynamic Design by D3.js, and fits to any size of screen or
                    platform
                </p>
            </div>
        </Carousel>
    );
};

export default Carousel1;
