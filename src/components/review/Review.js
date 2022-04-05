import React from 'react';
import './review.css';
const Review = (props) => {
    const { picture, name, ratings, review } = props.review;
    return (
        <div className='review'>
            <img src={picture} alt=""></img>
            <div className='details'>
                <h2>{name}</h2>
                <h3>{review}</h3>
                <p><b>ratings:{ratings}</b></p>
            </div>
        </div>
    );
};

export default Review;