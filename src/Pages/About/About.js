import React from 'react';
import { Col, Row } from 'react-bootstrap';
import me from '../../Assets/Pic.jpg';

const style = {
    height: 'calc(100vh - 150px)'
}

const About = () => {
    return (
        <div style={style} className='container d-flex justify-content-center align-items-center'>
            <Row xs={1} md={2}>
                <Col xs={4}>
                    <div className='w-50  ms-5'>
                        <img src={me} alt="Raihan" className='rounded-circle w-100 ms-5 shadow-lg' />
                    </div>
                </Col>
                <Col xs={8}>
                    <div>
                        <p className='text-gray fs-5'> Hey I'm Raihan, and I'm a junior web developer, my goal is to be a professional full stack web developer. I have learned HTML CSS as a markup language. I have already completed the bootstrap and tailwindcss framework at intermediate level. To become a front end developer, I have completed basic level learning of JavaScript as well as React Library and Firebase and now I am learning at Intermediate level. I plan to learn nodeJS MongoDB and express js to become a back end developer
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default About;