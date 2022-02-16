import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://damp-ridge-81565.herokuapp.com/shop')
            .then(res => res.json())
            .then(data => setProducts(data))
        
    }, []);
     
    const handleOrder = id => { 
        const url=`https://damp-ridge-81565.herokuapp.com/shop/${id}`
        fetch(url, {
            method:'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted')
                }
                const remaining = products.filter(product => product._id !==id)
                setProducts(remaining)
        })
    }

  
     
    return (
        <div className='shop'>
            <div>    
            {
                products.map(product => <Product
                    key={product.key}
                    product={product}
                    handleOrder={handleOrder}
                ></Product>)
            } 
            </div>
            <div>
                  <h1> product:{products.length} </h1>
            </div>
             
        </div>
    );
};

export default Shop;