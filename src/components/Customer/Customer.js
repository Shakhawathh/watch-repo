import React from 'react';
import './Customer.css';
const Customer = (props) => {
    const{name, price,ratings,picture} = props.watch;
    return (
        <div className='customer'>
             <img src={picture} alt=""></img>
            <div>
                <h3>name:{name}</h3>
                <h4>price:${price}</h4>
                <p><b>ratings:{ratings}</b></p>
            </div>
        </div>
    );
};

export default Customer;