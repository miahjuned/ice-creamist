import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Home = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allProduct')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    return (
        <Container>
            <Row>
                {
                    product.map(product => <Product product={product}></Product>)
                }
            </Row>
            
        </Container>
    );
};

export default Home;