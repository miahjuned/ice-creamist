import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CheckOut = () => {
    const {_id} = useParams();
    console.log(useParams())

    const [product, setProduct] = useState({});
    console.log(product)
    useEffect(() => {
        fetch('https://fierce-coast-48195.herokuapp.com/product/' + _id)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [_id])
    return (
        <div>
            id data: {_id}
            fetch data: {product}
        </div>
    );
};

export default CheckOut;