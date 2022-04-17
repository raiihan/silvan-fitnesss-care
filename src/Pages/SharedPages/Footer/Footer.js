import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className='bg-dark'>
            <p className='text-white text-center py-4'>Copyright &copy;Silvan {year}</p>
        </div>
    );
};

export default Footer;