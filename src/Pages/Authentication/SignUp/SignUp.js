import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import Loading from '../../SharedPages/Loading/Loading';
import SocialSignIn from '../SocialSignIn/SocialSignIn';

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmPass: ''
    });
    const [customError, setCustomError] = useState({
        emailError: '',
        passwordError: '',
        confirmPassError: '',
        firebaseError: ''
    })

    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const handleNameBlur = nameInput => {
        setUserInfo({ ...userInfo, name: nameInput });
    }
    const handleEmailBlur = emailInput => {
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
    const handlePasswordBlur = passwordInput => {
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
    const handleConfirmPassBlur = confirmPassInput => {
        if (confirmPassInput === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: confirmPassInput });
            setCustomError({ ...customError, confirmPassError: "" })
        }
        else {
            setCustomError({ ...customError, confirmPassError: "Password didn't matched" });
            setUserInfo({ ...userInfo, confirmPass: '' });
        }
    }


    if (user) {
        navigate(from, { replace: true });
    }
    const handleFormRegister = async e => {
        e.preventDefault();

        await createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        await updateProfile({ displayName: userInfo.name });

    }

    useEffect(() => {
        const error = hookError || updateError
        if (error) {
            switch (error?.code) {
                case "auth/email-already-in-use":
                    setCustomError({ ...customError, emailError: "Email Already Exists" })
                    break;
                case "auth/email-already-exists":
                    setCustomError({ ...customError, emailError: "Email Already Exists" })
                    break;
                case "auth/invalid-password":
                    setCustomError({ ...customError, passwordError: "Invalid Password" })
                    break;

                default:
                    setCustomError({ ...customError, firebaseError: error?.code })
                    break;
            }
        }
    }, [hookError, updateError])


    if (loading || updating) {
        return <Loading />
    }

    return (
        <div className='container my-5'>
            <div className="border w-50 mx-auto p-4 rounded shadow">
                <h3 className='text-center my-3'>Register</h3>
                <Form onSubmit={handleFormRegister} className='my-3'>
                    <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            onBlur={(e) => handleNameBlur(e.target.value)}
                            type="Name"
                            placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            onBlur={(e) => handleEmailBlur(e.target.value)}
                            type="email"
                            placeholder="Enter email"
                            required
                        />
                    </Form.Group>
                    {customError?.emailError && <p className='text-danger fw-bold'>{customError?.emailError}</p>}
                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            onBlur={(e) => handlePasswordBlur(e.target.value)}
                            type="password"
                            placeholder="Enter Password"
                            className='border'
                            required
                        />
                    </Form.Group>
                    {customError?.passwordError && <p className='text-danger fw-bold'>{customError?.passwordError}</p>}
                    <Form.Group className="mb-3" >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            onBlur={(e) => handleConfirmPassBlur(e.target.value)}
                            type="password"
                            placeholder="Enter Confirm Password"
                            className='border'
                            required
                        />
                    </Form.Group>
                    {customError?.confirmPassError && <p className='text-danger fw-bold'>{customError?.confirmPassError}</p>}
                    {customError?.firebaseError && <p className='text-danger fw-bold'>{customError?.firebaseError}</p>}

                    <div className="w-50 mx-auto">
                        <Button className='w-100 fw-bold' variant="outline-primary" type="submit">
                            Register
                        </Button>
                    </div>
                </Form>
                <p className='text-center text-muted fs-5'>Already have an account? <Link to={'/login'} className="text-decoration-none">Login</Link></p>
                <SocialSignIn />
            </div>
        </div>
    );
};

export default SignUp;