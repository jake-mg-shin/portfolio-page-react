import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../images/project1_1.png';
import img2 from '../images/project1_2.png';
import img3 from '../images/project1_3.png';

const Carousel1 = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} alt='' />
                <p
                    className='legend'
                    style={{ opacity: '0.5', fontSize: '14px' }}
                >
                    Shows current time and rotates to change the background
                    image
                </p>
            </div>
            <div>
                <img src={img2} alt='' />
                <p
                    className='legend'
                    style={{ opacity: '0.5', fontSize: '14px' }}
                >
                    Provides greeting to User after User's name is input,
                    creates and removes To-Do
                </p>
            </div>
            <div>
                <img src={img3} alt='' />
                <p
                    className='legend'
                    style={{ opacity: '0.5', fontSize: '14px' }}
                >
                    Provides current Temperature and Location by using geodata
                    and API
                </p>
            </div>
        </Carousel>
    );
};

export default Carousel1;
