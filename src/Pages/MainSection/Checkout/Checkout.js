import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
const style = {
    minHeight: 'calc(100vh - 150px)'
}
const Checkout = () => {
    const { serviceName } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleCheckoutSubmit = e => {
        toast.success(`Thank You for Booking me!!!`);
    }
    return (
        <div style={style}>
            <h3 className='text-center mt-3'>The service you choose is  <span className='text-primary'>{serviceName}.</span></h3>
            <div className="w-25 mx-auto shadow-lg p-3 my-5">
                <Form onSubmit={handleSubmit(handleCheckoutSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            {...register('name', { required: true })}
                            type="text"
                            placeholder="Your Name"
                        />
                    </Form.Group>
                    {errors.name?.type === 'required' && <p className='text-danger ps-2'>Name is required</p>}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            {...register('email', { required: true, pattern: { value: /\S+@\S+\.\S+/, message: "Please Provide a valid Email" } })}
                            type="text"
                            placeholder="Your Email"
                        />
                    </Form.Group>
                    {errors.email?.type === 'required' && <p className='text-danger ps-2'>Email is required</p>}
                    {errors.email?.type === 'pattern' && <p className='text-danger ps-2'>{errors.email?.message}</p>}

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            {...register('phone', { required: true })}
                            type="number"
                            placeholder="Your Phone Number"
                        />
                    </Form.Group>
                    {errors.phone?.type === 'required' && <p className='text-danger ps-2'>Phone is required</p>}
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            {...register('address', { required: true })}
                        />
                    </Form.Group>
                    {errors.address?.type === 'required' && <p className='text-danger ps-2'>Address is required</p>}
                    <div className="w-50 mx-auto">
                        <Button className='w-100' variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
            <Toaster />
        </div>
    );
};

export default Checkout;