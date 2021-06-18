import React from 'react';

const Reviewitem = (props) => {
    console.log(props)
    const {name ,quantity,key,price} = props.product
    const reeviewItemStyle = {
        borderBottom:'1px solid lightgray',
        marginBottom : '5px',
        paddingBottom :'5px',
        marginLeft :'200px'
    };
    return (

    
        <div style ={reeviewItemStyle} className = "review-item">
            <h4 className = "product-name">{name}</h4>
            <p>Quantity:{quantity}</p>
            <p><small>$:{price}</small></p>
            <br />
            <button
            className = "main-button"
            onClick = {()=>props.removeProduct(key)}
            >remove</button>
        </div>
    );
};

export default Reviewitem;