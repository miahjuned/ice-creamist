import React from 'react';
import { useParams } from 'react-router';

const CheckOut = () => {
    let {_id} = useParams();
    console.log(useParams())
    return (
        <div>
            {_id}
        </div>
    );
};

export default CheckOut;