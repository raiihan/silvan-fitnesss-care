import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import backgroundImage from '../../../Assets/bmi.jpg';

const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '480px'
}

const BMICalculate = () => {
    const [bmi, setBmi] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleBMI = data => {
        const height = parseFloat(data.height);
        const weight = parseFloat(data.weight);
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)

        if (Number(bmi) < 18.6) {
            setBmi('Under Weight');
        }
        else if (Number(bmi) >= 18.6 && bmi < 24.9) {
            setBmi('Normal');
        }
        else {
            setBmi('Over Weight');
        }
    }

    return (
        <div style={style}>
            <div className='container mt-4'>
                <Row xs={1} md={2}>
                    <div className="d-flex align-items-center justify-content-center">
                        <Col>
                            <div className='text-primary float-end'>
                                <h2 className=" fs-1 ">CALCULATE YOUR BMI</h2>
                                <p className='fs-3'>Find out your Body Mass Index, an accurate indicator of your body physique.</p>
                            </div>
                        </Col>
                    </div>
                    <div className="d-flex align-items-center">
                        <Col>
                            <div className="w-75 mx-auto border p-2 shadow-lg">
                                <Form onSubmit={handleSubmit(handleBMI)}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Height (in cm)</Form.Label>
                                        <Form.Control
                                            {...register('height', { required: true })}
                                            type="number"
                                            placeholder="in cm"
                                        />
                                    </Form.Group>
                                    {errors.height?.type === 'required' && <p className='text-danger ps-2'>Height is required</p>}

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Weight (in kg)</Form.Label>
                                        <Form.Control
                                            {...register('weight', { required: true })}
                                            type="number"
                                            placeholder="in kg"
                                        />
                                    </Form.Group>
                                    {errors.weight?.type === 'required' && <p className='text-danger ps-2'>Height is required</p>}
                                    <div className="w-50 mx-auto">
                                        <Button className='w-100' variant="primary" type="submit">
                                            Calculate BMI
                                        </Button>
                                    </div>
                                </Form>
                                <h4 className='text-center text-white bg-primary py-2 px-0 mt-2'>Your BMI Result: <span className={`fw-bold ${bmi === 'Normal' ? 'text-info' : 'text-danger'}`}>{bmi}</span></h4>
                            </div>
                        </Col>
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default BMICalculate;