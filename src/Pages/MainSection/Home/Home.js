import React from 'react';
import Banner from '../Banner/Banner';
import BMICalculate from '../BMICalculate/BMICalculate';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <BMICalculate />

        </div>
    );
};

export default Home;