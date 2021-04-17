import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router';

const CheckOut = () => {
    const {_id} = useParams();
    console.log('id', _id)

    const [product, setProduct] = useState({});
    console.log(product)
    
    useEffect(() => {
        fetch('https://fierce-coast-48195.herokuapp.com/product/' + _id)
        // fetch(`http://localhost:5000/product/${_id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [_id])

    
    return (
        <div>
            <Table striped bordered hover variant="info" responsive>
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Quantity</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Wight</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img style={{height: '100px'}} src={product.imageURL} alt="product image"/></td>
                        <td>1</td>
                        <td>{product.name}</td>
                        <td> ৳{product.price} Tk</td>
                        <td>{product.wight}g</td>
                    </tr>
                    <Button className="ml-auto">Place order</Button>
                </tbody>
            </Table>
             {
                    product.length === 0 && <div className="spinner-border text-info spiner" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                }
        </div>
    );
};

export default CheckOut;