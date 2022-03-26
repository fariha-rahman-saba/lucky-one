import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, image, price } = props.product;
    console.log(props.product);
    return (

        <div className='single-product'>

            <h1>{name}</h1>
            <img src={image} alt="" width="256px" height="256px" />
            <p>{price}</p>
        </div>

    );
};

export default Product;