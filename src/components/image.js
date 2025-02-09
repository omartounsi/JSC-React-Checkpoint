import React from 'react';
import product from '../data/product';
import '../style.css';

const Image = () =>{
    return <img src= {product.imageUrl} alt={product.name} />
}

export default Image;