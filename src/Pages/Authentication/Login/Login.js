import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import Loading from '../../SharedPages/Loading/Loading';
import SocialSignIn from '../SocialSignIn/SocialSignIn';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });
    const [customError, setCustomError] = useState({
        emailError: '',
        passwordError: '',
        firebaseError: ''
    })

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, passReseterror] = useSendPasswordResetEmail(auth);

    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";




    const handleEmailChange = emailInput => {
        const validMail = /\S+@\S+\.\S+/.test(emailInput);
        if (validMail) {
            setUserInfo({ ...userInfo, email: emailInput });
            setCustomError({ ...customError, emailError: "" })
        }
        else {
            setCustomError({ ...customError, emailError: "Please Provide a valid Email" })
            setUserInfo({ ...userInfo, email: '' });
        }
    }
    const handlePasswordChange = passwordInput => {
        const validPass = /.{7,}/.test(passwordInput);
        if (validPass) {
            setUserInfo({ ...userInfo, password: passwordInput });
            setCustomError({ ...customError, passwordError: "" })
        }
        else {
            setCustomError({ ...customError, passwordError: "Password Minimum 7 Characters" })
            setUserInfo({ ...userInfo, password: '' });
        }
    }


    if (user) {
        navigate(from, { replace: true });
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }

    const handlePasswordReset = async () => {
        if (userInfo.email === '') {
            toast.error('Please Input Your Email First');
        }
        else {
            console.log(userInfo.email)
            await sendPasswordResetEmail(userInfo.email)
            toast.success('Your Password Reset email Sent. Please Check your Email.');
        }
    }

    useEffect(() => {
        const firebaseError = error || passReseterror;
        if (firebaseError) {
            switch (error?.code) {
                case "auth/invalid-password":
                    setCustomError({ ...customError, passwordError: "Invalid Password" })
                    break;
                case "auth/wrong-password":
                    setCustomError({ ...customError, passwordError: "Wrong Password" })
                    break;

                default:
                    setCustomError({ ...customError, firebaseError: error?.code })
                    break;
            }
        }
    }, [error, passReseterror])

    if (loading || sending) {
        return <Loading />
    }
    return (
        <div className='container my-5'>
            <div className="border w-50 mx-auto p-4 rounded shadow">
                <h3 className='text-center my-3'>Login</h3>
                <Form onSubmit={handleLoginSubmit} className='my-3'>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            onChange={(e) => handleEmailChange(e.target.value)}
                            type="email"
                            placeholder="Enter email"
                            required
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    {customError?.emailError && <p className='text-danger fw-bold'>{customError?.emailError}</p>}
                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            onChange={(e) => handlePasswordChange(e.target.value)}
                            type="password"
                            placeholder="Enter Password"
                            className='border'
                            required
                        />
                    </Form.Group>
                    {customError?.passwordError && <p className='text-danger fw-bold'>{customError?.passwordError}</p>}
                    {customError?.firebaseError && <p className='text-danger fw-bold'>{customError?.firebaseError}</p>}
                    <h6 className='text-primary fw-bold  float-end '>
                        <Link
                            onClick={handlePasswordReset}
                            to={'/login'}
                            className="text-decoration-none"
                        >
                            Forgot Password?
                        </Link>
                    </h6>
                    <div className="w-50 mx-auto mt-5">
                        <Button className='w-100 fw-bold' variant="outline-primary" type="submit">
                            Login
                        </Button>
                    </div>
                </Form>
                <p className='text-center text-muted fs-5'>Don't have an account? <Link to={'/signup'} className="text-decoration-none">Register</Link></p>
                <Toaster />
                <SocialSignIn />
            </div>
        </div>
    );
};

export default Login;