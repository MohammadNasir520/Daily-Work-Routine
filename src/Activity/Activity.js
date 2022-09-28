import React from 'react';
import './Activity.css'

const Activity = (props) => {
    console.log(props.activity
        )
    const {img}=props.activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
        </div>
    );
};

export default Activity;