import { Button } from 'react-bootstrap';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';

const SocialSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>

            <div className="d-flex align-items-center">
                <div style={{ height: '1px' }} className='w-50 border'></div>
                <p className='px-2 mt-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 border'></div>

            </div>
            {error && <p className='text-danger fw-bold text-center'>{error?.code}</p>}
            <div className='w-50 mx-auto'>
                <Button
                    onClick={() => signInWithGoogle()}
                    className='w-100'
                    variant="outline-primary"
                >
                    Google
                </Button>
            </div>
        </div>
    );
};

export default SocialSignIn;