import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'typeface-titillium-web';

const Service = ({ service: { name, picture, price, title, packageTime, body } }) => {
    const navigate = useNavigate();
    return (


        <Col>
            <Card
                data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
                className='my-3'>
                <Card.Img height={350} variant="top" src={picture} />
                <Card.Body>
                    <Card.Title className='mb-0'>{name}</Card.Title>
                    <span>{title}</span>
                    <div className='d-flex justify-content-between my-2'>
                        <p>Price: ${price}</p>
                        <p>Training Period: {packageTime ? packageTime : 'not mentioned'}</p>
                    </div>
                    <Card.Text style={{ fontFamily: 'titillium-web' }} className='mt-0'>
                        {body}
                    </Card.Text>
                    <div className='w-50 mx-auto'>
                        <Button
                            className='w-100'
                            onClick={() => navigate(`/checkout/${name}`)}
                            variant="primary">Checkout</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>


    );
};

export default Service;