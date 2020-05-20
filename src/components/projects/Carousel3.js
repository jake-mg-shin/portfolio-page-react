import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../images/project3_1.png';
import img2 from '../images/project3_2.png';
import img3 from '../images/project3_3.png';
import img4 from '../images/project3_4.png';
import img5 from '../images/project3_5.png';
import img6 from '../images/project3_6.png';

const Carousel1 = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} alt='' />
                <p
                    className='legend'
                    style={{ opacity: '0.7', fontSize: '16px' }}
                >
                    A Template for Realty industry in a community
                </p>
            </div>
            <div>
                <img src={img2} alt='' />
                <p
                    className='legend'
                    style={{ opacity: '0.7', fontSize: '16px' }}
                >
                    Easily creates Cards of Listings and Specific Data
                </p>
            </div>
            <div>
                <img src={img3} alt='' />
                <p
                    className='legend'
                    style={{ opacity: '0.7', fontSize: '16px' }}
                >
                    Shows locations of Listings dynamically by using Mapbox GL
                </p>
            </div>
            <div>
                <img src={img4} alt='' />
                <p
                    className='legend'
                    style={{ opacity: '0.7', fontSize: '16px' }}
                >
                    Shows Details of Listings on Modal window
                </p>
            </div>
            <div>
                <img src={img5} alt='' />
                <p
                    className='legend'
                    style={{ opacity: '0.7', fontSize: '16px' }}
                >
                    Shows figures or numbers as a graph by using D3.js
                </p>
            </div>
            <div>
                <img src={img6} alt='' />
                <p
                    className='legend'
                    style={{ opacity: '0.7', fontSize: '16px' }}
                >
                    Be able to hook any open or public news in the web
                </p>
            </div>
        </Carousel>
    );
};

export default Carousel1;
