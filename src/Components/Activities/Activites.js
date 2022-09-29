import React, { useState } from 'react';
import Activity from '../Activity/Activity';
import Header from '../Header/Header';
import SideCart from '../SideCart/SideCart';
import './Activities.css'

const Activites = () => {
    const activities=[
        {id:1, name:'Running', time: 20 , img: "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cnVubmluZ3xlbnwwfHwwfHw%3D&w=1000&q=80"},
        {id:2, name:'Push Up', time: 5 , img: "../../images/exercise-logo.png"},
        {id:3, name:'Pul up', time: 4 , img: "../../images/exercise-logo.png"},
        {id:4, name:'swimming', time: 10, img: "../../images/exercise-logo.png"},
        {id:5,name:'sketing', time: 30 , img: "../../images/exercise-logo.png"},
        {id:6, name:'bet khela', time: 7 , img: "../../images/exercise-logo.png"},
        
    ];
    const [time, setTime]=useState(0)
    console.log(time)
    const handleClick=(activity)=>{
       
        
        const addedTime= time+ activity.time;
        setTime(addedTime)
      
    }
   
    return (
        <div className='Activities-container'>
            <div>
                <Header></Header>
              <h5>Select today's Activities</h5>
             <div className='activities'>
          
                  {
                     activities.map(activity=><Activity 
                     key={activity.id}
                     activity={activity}
                     handleClick ={handleClick}
                     ></Activity>)
                   }
              </div>
            </div>
           
          
            <div>
            <SideCart time={time}></SideCart>
            <div>
            <div>
                <h4>Activity Details </h4>

                <div>
                  <h5>  Exercise Time: <span>{time}</span>m</h5>

                </div>
                <div>
                  <h5>  Break Time: <span id='break-time-show'>0</span>m</h5>

                </div>
                <button className='btn-completed'>Activity Completed</button>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Activites;