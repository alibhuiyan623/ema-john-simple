import React from 'react';


const Cart = (props) => {
    const cart =props.cart
    //console.log(cart);
    //const total = cart.reduce((total ,prd) => total+prd.price , 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
      
    }
    let shipingCharg = 0;
     if(total>35){
        shipingCharg = 0
    }
    else if (total>15){
        shipingCharg = 3.50;
    }
    else if (total >0){
        shipingCharg = 0
    }
    const tax = (total/10).toFixed(2)
    const grandTotal = (total + shipingCharg +Number (tax)).toFixed(2)
    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision)
    }
   
    
    
    return (
        <div>
          
<h4>order summery </h4>
<p>items orderd :{cart.length}</p>
<p>product price :{formatNumber(total)}</p>
<p><small>tax + vat:{tax}</small></p>
<p><small> shiping charg :{shipingCharg}</small></p>
<p>total Price :{grandTotal}</p>
<br />
{
    props.children
}



        </div>
    );
};

export default Cart;