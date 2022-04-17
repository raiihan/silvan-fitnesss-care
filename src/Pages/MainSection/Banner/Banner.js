import React from 'react';
import './Banner.css';
import banner from '../../../Assets/Banner/banner1.jpg';
import banner3 from '../../../Assets/Banner/banner3.jpg';
import banner2 from '../../../Assets/Banner/banner2.jpg';
import { Carousel } from 'react-bootstrap';

const styles = {
    container: {
        backgroundImage: `url(${banner})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '650px'
    }
};

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <p>¨Reading is to the mind what exercise is to the body.¨- Joseph Addison</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <p>¨The pain you feel today will be the strength you feel tomorrow.¨ – Arnold Schwarzenegger</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <p>¨Your body is the church where Nature asks to be reverenced.¨ – Marquis de Sade</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        // <div style={styles.container}>

        // </div>
    );
};

export default Banner;