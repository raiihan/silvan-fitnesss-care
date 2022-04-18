import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'typeface-titillium-web';

const styleAni = {
    transform: 'scale(1.1)',
    transition: 'all .6s',
    overflow: 'hidden'
}

const Service = ({ service: { name, picture, price, title, packageTime, body } }) => {
    const [animate, setAnimate] = useState({})
    const navigate = useNavigate();



    const handleAnimation = () => {
        setAnimate(styleAni)
    }
    const mouseOut = () => {
        setAnimate({ transition: 'all .6s' })
    }
    return (


        <Col>

            <Card
                onMouseOut={mouseOut}
                onMouseOver={handleAnimation}
                style={animate}
                className='my-3'>
                <Card.Img
                    height={350}
                    variant="top"
                    src={picture} />
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