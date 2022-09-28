import React from 'react';
import './Activity.css'

const Activity = (props) => {
    console.log(props.activity
        )
    const {img ,name, time}=props.activity;
    return (
       
             <div className='activity'>
             <img src={img} alt="" />
            
            <h4>{name}</h4>
            <p>{time}</p>
            <button> Add to list</button>
             </div>
      
       
    );
};

export default Activity;