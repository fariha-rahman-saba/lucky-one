import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div>
            <h1>Thid is products</h1>
            {
                products.map(product => <Product product={product}></Product>)
            }
        </div>
    );
};

export default Products;