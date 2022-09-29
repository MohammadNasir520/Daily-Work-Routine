import React from 'react';
import './QustionAns.css'

const QuestionAns = () => {
    return (
        <div className='ans-container'>
            
            <div className='ans'>
                <h2>How does react work?</h2>
               
                
                <p>ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.
                JSX is a JavaScript syntax extension used in React element creation. Developers employ it to embed HTML code in JavaScript objects. As JSX accepts valid JavaScript expressions and function embedding, it can simplify complex code structure.

                reacat create a virtual dom and compare with orginal dom and update the changed elemnts.
                </p>
            </div>
            <div className='ans'>
                <h2>Difference between props and state</h2>
                <br />
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
            </div>
            <div className='ans'>
               <h2> How can we use useEffect without loading data</h2>
               <p>Running on state change: validating input field
                    Running on state change: live filtering
                    Running on state change: trigger animation on new array value
                    Running on props change: update paragraph list on fetched API data update
                    Running on props change: updating fetched API data to get BTC updated price
                </p>
            </div>
        </div>
    );
};

export default QuestionAns;