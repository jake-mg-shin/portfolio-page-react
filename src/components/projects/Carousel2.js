import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../images/project2_0.png';
import img2 from '../images/project2_1.png';
import img3 from '../images/project2_2.png';
import img4 from '../images/project2_3.png';
import img5 from '../images/project2_4.png';

const Carousel1 = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} alt='' />
            </div>
            <div>
                <img src={img2} alt='' />
                <p
                    className='legend'
                    style={{ opacity: '0.7', fontSize: '16px' }}
                >
                    Provides a functions to create Posting and comments which
                    are maintained by MongoDB Atlas
                </p>
            </div>
            <div>
                <img src={img3} alt='' />
                <p
                    className='legend'
                    style={{ opacity: '0.7', fontSize: '16px' }}
                >
                    Provides Authentication for User
                </p>
            </div>
            <div>
                <img src={img4} alt='' />
                <p
                    className='legend'
                    style={{ opacity: '0.7', fontSize: '16px' }}
                >
                    Be able to create Posting after Log in only
                </p>
            </div>
            <div>
                <img src={img5} alt='' />
                <p
                    className='legend'
                    style={{ opacity: '0.7', fontSize: '16px' }}
                >
                    Not only creates Posting, but also edits or deletes own
                    posts include comments
                </p>
            </div>
        </Carousel>
    );
};

export default Carousel1;
