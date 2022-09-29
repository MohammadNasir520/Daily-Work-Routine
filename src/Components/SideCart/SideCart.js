import React, { useEffect, useState } from 'react';
import { addToLocalStorage, getBreakTime } from '../localStorage/LocalStorage';
import './SideCart.css'

const SideCart = ({time}) => {

   const [breakTime, setBreakTime]=useState([]);
   const addBreakTime=(addTime)=>{
    setBreakTime(addTime)
    localStorage.setItem('addedBreakTime',addTime)
   }
   useEffect(()=>{
  const priveousTime=localStorage.getItem('addedBreakTime')
  setBreakTime(priveousTime)
   },[])

   
    const setBreakTimeById=id=>{
        const firstBreak=document.getElementById(id);
        const firstBreakString=firstBreak.innerText;
        const firstBreakTime=parseInt(firstBreakString);
        addBreakTime(firstBreakTime)
        const breakTimeShow=document.getElementById('break-time-show')
        
       breakTimeShow.innerText=firstBreakTime;

    //    addToLocalStorage(id, firstBreakTime);
    //    getBreakTime(id,firstBreakTime)
    // console.log(id)
    };

    return (
        <div className='sideCart-container'>
            <div>
            <h2>Mohammad Nasir</h2>
            </div>
            <div className='information'>
                <div>
                    <h4>65 kg</h4>
                   <p> weight</p>
                </div>
                <div className='mid-info'>
                    <h4>6.6 feet</h4>
                   <p> Height</p>
                </div>
                <div>
                    <h4>23 years</h4>
                   <p> Age</p>
                </div>
            </div>

            <div className='break-container'>
                <h3>Add a Break</h3>
                <div className='break-time'>
                <p onClick={()=>{setBreakTimeById('first-break')}}> <span id='first-break' >10</span>m</p>
                <p onClick={()=>{setBreakTimeById('second-break')}}> <span id='second-break'>20</span>m</p>
                <p onClick={()=>{setBreakTimeById('third-break')}}> <span id='third-break'>30</span>m</p>
                <p onClick={()=>{setBreakTimeById('fourth-break')}}> <span id='fourth-break'>40</span>m</p>
                <p onClick={()=>{setBreakTimeById('fifth-break')}}> <span id='fifth-break'>50</span>m</p>
                </div>
            </div>
            <div>
                <h4>Activity Details </h4>

                
                  <h5>  Exercise Time: <span>{time}</span>m</h5>

                
                  <h5>  Break Time: <span id='break-time-show'>{breakTime}</span>m</h5>

                
                
            </div>
           
        </div>
    );
};

export default SideCart;