import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDeatls = () => {
    const {productKey} =useParams();
   const product = fakeData.find(pd =>pd.key ===productKey)
   console.log(product)
    return (
    <div>
<h1>{productKey}  commig sooooooooooon</h1>
<Product showAddCart ={false} product = {product}></Product>
    </div>
    );        
};

export default ProductDeatls;