import React, { useEffect, useState } from 'react';
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
             {
                    product.length === 0 && <div className="spinner-border text-info spiner" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                }
            ID: {product._id}
            Name: {product.name}
            price: {product.price}
        </div>
    );
};

export default CheckOut;