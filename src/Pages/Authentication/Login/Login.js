import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialSignIn from '../SocialSignIn/SocialSignIn';
import './Login.css';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    // navigate(from, { replace: true });
    return (
        <div className='container my-5'>
            <div className="border w-50 mx-auto p-4 rounded shadow">
                <h3 className='text-center my-3'>Login</h3>
                <Form className='my-3'>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" className='border' />
                    </Form.Group>
                    <h6 className='text-primary fw-bold  float-end'><Link to={'/login'} className="text-decoration-none">Forgot Password?</Link></h6>
                    <div className="w-50 mx-auto">
                        <Button className='w-100' variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                </Form>
                <p className='text-center text-muted fs-5'>Don't have an account? <Link to={'/signup'} className="text-decoration-none">Register</Link></p>
                <SocialSignIn />
            </div>
        </div>
    );
};

export default Login;