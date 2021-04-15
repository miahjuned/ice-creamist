import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import './Home.css'
const Home = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://fierce-coast-48195.herokuapp.com/allProduct')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    return (
        <Container>
            <Row>
                {
                    product.length === 0 && <div className="spinner-border text-info spiner" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                }
                
                {
                    product.map(product => <Product key={product.key} product={product}></Product>)
                }
            </Row>
            
        </Container>
    );
};

export default Home;