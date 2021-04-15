import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {_id, name, wight, price, imageURL} = product;
    return (
        <Col md={6} lg={3} sm={6} xl={3} xs={12} className=" mt-2 pt-2">
            <Card className="mb-3">
                <Card.Img style={{height: '200px'}} variant="top" src={imageURL}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="d-flex justify-content-around">
                        <strong className="mr-5">${price}</strong>  
                        <strong>Weight: {wight}g</strong>
                    </Card.Text>
                    <Link className="btn btn-info" to={`/checkout/${_id}`}>Add to Cart</Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;