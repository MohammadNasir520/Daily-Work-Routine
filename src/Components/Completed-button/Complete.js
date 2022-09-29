import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import './Complete.css'

const Complete = () => {
    const showToast=()=>{
        toast("Congratulations!  you are done your activities")
    }
    return (
        <div>
            <button onClick={()=>showToast()} className='btn-completed'>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Complete;