import React, { useState } from 'react';
import Activity from '../Activity/Activity';
import Complete from '../Completed-button/Complete';
import Header from '../Header/Header';
import QuestionAns from '../QuestionAns/QuestionAns';
import SideCart from '../SideCart/SideCart';
import './Activities.css'

const Activites = () => {
    const activities=[
        {id:1, name:'Running', time: 20 , img: "https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&w=600"},

        {id:2, name:'Push Up', time: 5 , img: "https://assets.gqindia.com/photos/5cee7eb00379a73d25177759/master/pass/Pushup.jpg"},

        {id:3, name:'Pul up', time: 4 , img: "https://www.muscleandfitness.com/wp-content/uploads/2019/12/Fit-Man-Performing-A-Pullup-In-The-Park.jpg?quality=86&strip=all"},

        {id:4, name:'swimming', time: 10, img: "https://media.istockphoto.com/photos/aerial-top-view-male-swimmer-swimming-in-swimming-pool-professional-picture-id1332857654?b=1&k=20&m=1332857654&s=170667a&w=0&h=WpW3--Gj2X2JByndgnhGuuCWvwNSpnJIKfa9BWfDIcI="},
        {id:5,name:'skating', time: 30 , img: "https://media.istockphoto.com/photos/young-man-skateboarding-in-los-angeles-picture-id1209988354?b=1&k=20&m=1209988354&s=170667a&w=0&h=6la5GZlsnqA6YkqDPnivlaEvuh0YIV1ng-80SFkTw3Q="},
        {id:6, name:'Skipping rope', time: 7 , img: "https://i.ndtvimg.com/i/2017-11/skipping-rope-helps-in-reducing-back-fat_650x400_61510922405.jpg"},
        
    ];
    const [time, setTime]=useState(0)
   
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
                   <QuestionAns></QuestionAns>

            </div>
           
          
            <div className='sideCart-parent' >
             <div className='sideCart-container'>

                
               <SideCart time={time}></SideCart>
               <Complete></Complete>
             </div>
            <div>

           
            
            </div>
            </div>
        </div>
    );
};

export default Activites;