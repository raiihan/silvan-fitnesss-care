import { Button } from 'react-bootstrap';
import { FaFacebook, FaGoogle, FaTwitter, FaGithub } from 'react-icons/fa';
import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle, useSignInWithTwitter } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
import Loading from '../../SharedPages/Loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialSignIn = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const [signInWithTwitter, twitterUser, twitterLoading, twitterError] = useSignInWithTwitter(auth);


    if (googleLoading || githubLoading || facebookLoading || twitterLoading) {
        return <Loading />
    }
    if (googleUser || githubUser || facebookUser || twitterUser) {
        navigate(from, { replace: true })
    }

    const error = googleError || githubError || facebookError || twitterError;
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
                    onClick={() => signInWithFacebook()}
                    className='w-100 fw-bold'
                    variant="outline-primary"
                >
                    <FaFacebook className='me-2' size={40} />
                    Facebook
                </Button>
            </div>
            <div className='w-50 mx-auto my-2'>
                <Button
                    onClick={() => signInWithTwitter()}
                    className='w-100 fw-bold'
                    variant="outline-primary"
                >
                    <FaTwitter className='me-2' size={40} />
                    Twitter
                </Button>
            </div>
            <div className='w-50 mx-auto'>
                <Button
                    onClick={() => signInWithGithub()}
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