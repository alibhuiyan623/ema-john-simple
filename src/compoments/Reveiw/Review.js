import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Reviewitem from '../Reviewitem/Reviewitem';
import Cart from '../Cart/Cart'
import happyImage from '../../images/giphy.gif'
import { or } from 'ip';

const Review = () => {
const [cart ,setCart] = useState([]);
const [orderPlaced , setOrderPlaced] = useState(false)

const handlePlaceOrder = () =>{
setCart([]);
setOrderPlaced(true);
processOrder();

}

const removeProduct = (productKey) =>{
   removeFromDatabaseCart(productKey);
    const newCart = cart.filter(pd => pd.key !==productKey)
setCart(newCart);
}


useEffect(()=>{
    //cart
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    const cartProducts =  productKeys.map( key => {
        const product = fakeData.find( pd => pd.key === key);
        product.quantity = savedCart[key];
        return product;
    });
    setCart(cartProducts);
}, []);

//
 let thankYou;
 if (orderPlaced) {
thankYou = <img src={happyImage} alt="" /> 
 }
   
    return (

    <div className = "twin-container">
           <div className = "product-container">

           {
               cart.map(pd => <Reviewitem
                key = {pd.key}
                removeProduct ={removeProduct}
                product ={pd}></Reviewitem>)
           }
          {thankYou}
           </div>
           <div className ="cart-container">
            <Cart cart ={cart}>
                <button onClick ={handlePlaceOrder} className = "main-button"> place order</button>
            </Cart>
           </div>
        
        </div>
    );
};

export default Review;