import React from 'react';
import './SideCart.css'

const SideCart = () => {
   
    const setBreakTimeById=id=>{
        const firstBreak=document.getElementById(id);
        const firstBreakString=firstBreak.innerText;
        const firstBreakTime=parseInt(firstBreakString);

        const breakTimeShow=document.getElementById('break-time-show')
        
       breakTimeShow.innerText=firstBreakTime;
    console.log(firstBreakTime)
    };

    return (
        <div className='sideCart-container'>
            <div>
            <h2>Mohammad Nasir</h2>
            </div>
            <div className='information'>
                <div>
                    <h4>75 kg</h4>
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
                <p onClick={()=>{setBreakTimeById('first-break')}}> <span id='first-break' >10</span>s</p>
                <p onClick={()=>{setBreakTimeById('second-break')}}> <span id='second-break'>20</span>m</p>
                <p onClick={()=>{setBreakTimeById('third-break')}}> <span id='third-break'>30</span>m</p>
                <p onClick={()=>{setBreakTimeById('fourth-break')}}> <span id='fourth-break'>40</span>m</p>
                <p onClick={()=>{setBreakTimeById('fifth-break')}}> <span id='fifth-break'>50</span>m</p>
                </div>
            </div>
            
           
        </div>
    );
};

export default SideCart;