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
                    style={{ opacity: '0.7', fontSize: '16px' }}
                >
                    Shows current time and rotates to change back ground
                </p>
            </div>
            <div>
                <img src={img2} alt='' />
                <p
                    className='legend'
                    style={{ opacity: '0.7', fontSize: '16px' }}
                >
                    Provides greeting to User after user's name is input,
                    creates and removes To-Do
                </p>
            </div>
            <div>
                <img src={img3} alt='' />
                <p
                    className='legend'
                    style={{ opacity: '0.7', fontSize: '16px' }}
                >
                    Provides current Temperature and Location by using geo data
                    and API
                </p>
            </div>
        </Carousel>
    );
};

export default Carousel1;
