import React from 'react';
import { Col, Row } from 'react-bootstrap';
import notFound from '../../../Assets/Error/404.png';

const style = {
    height: 'calc(100vh - 155px)'
}

const NotFound = () => {
    return (
        <div style={style} className="d-flex align-items-center justify-content-center">
            <Row xs={1} md={2}>
                <Col>
                    <img src={notFound} alt="notFound" />
                </Col>
                <Col className='d-flex align-items-center'>
                    <div className="text-danger fw-bold">
                        <h5>You got lost on the wrong route.</h5>
                        <p> <strong>This url was not found</strong></p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default NotFound;