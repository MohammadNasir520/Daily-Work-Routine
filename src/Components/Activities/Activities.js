import React from 'react';
import Activity from '../../Activity/Activity';
import './Activities.css'
const Activities = () => {
    const activities=[
        {name:'Running', time: '20 minutes', img: "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cnVubmluZ3xlbnwwfHwwfHw%3D&w=1000&q=80"},
        {name:'Running', time: '20 minutes', img: "../../images/exercise-logo.png"},
        {name:'Running', time: '20 minutes', img: "../../images/exercise-logo.png"},
        {name:'Running', time: '20 minutes', img: "../../images/exercise-logo.png"},
        {name:'Running', time: '20 minutes', img: "../../images/exercise-logo.png"},
        {name:'Running', time: '20 minutes', img: "../../images/exercise-logo.png"},
        
    ]
    return (
        <div>
            <h5>Select today's Activities</h5>
            <div className='activities'>
          
           {
           activities.map(activity=><Activity activity={activity}></Activity>)
           }
            </div>
        </div>
    );
};

export default Activities;