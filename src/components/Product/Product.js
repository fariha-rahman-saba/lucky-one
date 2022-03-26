import React from 'react';

const Product = (props) => {
    const { name, img, price } = props.product;

    return (
        <div>
            THis is product:
            <h1>{name}</h1>
            <p>{price}</p>
        </div>
    );
};

export default Product;