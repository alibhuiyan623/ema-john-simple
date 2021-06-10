import React from 'react';

const Reviewitem = (props) => {
    console.log(props)
    const {name ,quantity} = props.product
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
            <br />
            <button className = "main-button">remove</button>
        </div>
    );
};

export default Reviewitem;