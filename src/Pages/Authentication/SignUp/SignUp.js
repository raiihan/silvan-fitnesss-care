import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
        confirmPassError: ''
    })
    const handleNameBlur = nameInput => {
        console.log(nameInput);
    }
    const handleEmailBlur = emailInput => {
        console.log(emailInput);
    }
    const handlePasswordBlur = passwordInput => {
        console.log(passwordInput);
    }
    const handleConfirmPassBlur = confirmPassInput => {
        console.log(confirmPassInput);
    }
    return (
        <div className='container my-5'>
            <div className="border w-50 mx-auto p-4 rounded shadow">
                <h3 className='text-center my-3'>Register</h3>
                <Form className='my-3'>
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
                            placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            onBlur={(e) => handlePasswordBlur(e.target.value)}
                            type="password"
                            placeholder="Enter Password"
                            className='border' />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            onBlur={(e) => handleConfirmPassBlur(e.target.value)}
                            type="password"
                            placeholder="Enter Confirm Password"
                            className='border' />
                    </Form.Group>

                    <div className="w-50 mx-auto">
                        <Button className='w-100' variant="primary" type="submit">
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