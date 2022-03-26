import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { name, image, price } = props.product;
    const { handleAddToCart } = props;
    return (

        <div className='single-product'>
            <img src={image} alt="" width="256px" height="256px" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <button onClick={() => handleAddToCart(props.product)}>
                Add to cart
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>

    );
};

export default Product;