import React, { useEffect, useState } from 'react';
import Customer from '../Customer/Customer';
import './CustomerReview.css';

const CustomerReview = () => {
const [watches,setWatches]=useState([]);
useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setWatches(data))
},[])

    return (
        <div className='customer'>
           {
               watches.slice(0,3).map(watch=> <Customer watch={watch}></Customer>)
           }
        </div>
    );
};

export default CustomerReview;