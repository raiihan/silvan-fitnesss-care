import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container'>
            {services.length}
            <h3 className='text-center my-3'>My Provided Services</h3>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    />)
                }
            </Row>
        </div>
    );
};

export default Services;