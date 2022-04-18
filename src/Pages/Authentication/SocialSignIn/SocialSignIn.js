import { Button } from 'react-bootstrap';
import { FaFacebook, FaGoogle, FaTwitter, FaGithub } from 'react-icons/fa';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
import Loading from '../../SharedPages/Loading/Loading';

const SocialSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (loading) {
        return <Loading />
    }
    return (
        <div>

            <div className="d-flex align-items-center">
                <div style={{ height: '1px' }} className='w-50 border'></div>
                <p className='px-2 mt-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 border'></div>

            </div>
            {error && <p className='text-danger fw-bold text-center'>{error?.code}</p>}
            <div className='w-50 mx-auto my-2'>
                <Button
                    onClick={() => signInWithGoogle()}
                    className='w-100 fw-bold'
                    variant="outline-primary"
                >
                    <FaGoogle className='me-2' size={40} />
                    Google
                </Button>
            </div>
            <div className='w-50 mx-auto my-2'>
                <Button
                    onClick={() => signInWithGoogle()}
                    className='w-100 fw-bold'
                    variant="outline-primary"
                >
                    <FaFacebook className='me-2' size={40} />
                    Facebook
                </Button>
            </div>
            <div className='w-50 mx-auto my-2'>
                <Button
                    onClick={() => signInWithGoogle()}
                    className='w-100 fw-bold'
                    variant="outline-primary"
                >
                    <FaTwitter className='me-2' size={40} />
                    Twitter
                </Button>
            </div>
            <div className='w-50 mx-auto'>
                <Button
                    onClick={() => signInWithGoogle()}
                    className='w-100 fw-bold'
                    variant="outline-primary"
                >
                    <FaGithub className='me-2' size={40} />
                    Github
                </Button>
            </div>
        </div>
    );
};

export default SocialSignIn;