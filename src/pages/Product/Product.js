import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const { img, id, name, category, price, seller } = props.product;
    
    return (
        <div className='product'>
            <div> <img src={img} alt="" /></div>
            <div>
                <p className='name'>{name}</p>
                <p><small>{ seller}</small></p>
                <p>{category}</p>
                <p>{price}</p>
                <Button
                    onClick={()=> props.handleOrder(props.product._id)}
                    variant="warning">delete</Button>
            </div>
        </div>
    );
};

export default Product;