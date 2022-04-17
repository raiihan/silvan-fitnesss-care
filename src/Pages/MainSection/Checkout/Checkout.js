import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { serviceName } = useParams();
    return (
        <div>
            <h1 className='text-center'>Thanks you for Checkout {serviceName} service from me </h1>
        </div>
    );
};

export default Checkout;