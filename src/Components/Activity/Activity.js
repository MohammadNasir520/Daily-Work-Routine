import React from 'react';
import './Activity.css'

const Activity = (props) => {
    // console.log(props
    //     )
    const {img ,name, time}=props.activity;
    const {handleClick}=props
    return (
       
             <div className='activity'>
             <img src={img} alt="" />
            
            <h4>{name}</h4>
            <p>{time} minutes</p>
            <button onClick={()=>handleClick(props.activity)}> Add to list</button>
             </div>
      
       
    );
};

export default Activity;