import React from 'react';

const QuestionAns = () => {
    return (
        <div>
            <h2>ans</h2>
            <div>
                <h2>How does react work?</h2>
               
                
                <p>ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.
                JSX is a JavaScript syntax extension used in React element creation. Developers employ it to embed HTML code in JavaScript objects. As JSX accepts valid JavaScript expressions and function embedding, it can simplify complex code structure.

                reacat create a virtual dom and compare with orginal dom and update the changed elemnts.
                </p>
            </div>
            <div>
                <h2>Difference between props and state</h2>
                <br />
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
            </div>
            <div>
               <h2> How can we use useEffect without loading data</h2>
            </div>
        </div>
    );
};

export default QuestionAns;