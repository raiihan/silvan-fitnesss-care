import React from 'react';
import loadingGif from '../../../Assets/LoadingImg/Loading_icon.gif';
const Loading = () => {
    return (
        <div className='min-vh-100 d-flex justify-content-center align-items-center'>
            <div>
                <h1 className='text-success'>Please Keep Patience</h1>
                <img src={loadingGif} alt="Loading" />
            </div>
        </div>
    );
};

export default Loading;