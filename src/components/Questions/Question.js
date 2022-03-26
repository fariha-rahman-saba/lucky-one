import React from 'react';
import './Questions.css'

const Question = () => {
    return (
        <div className='ques-ans'>
            <h2>Q1. How react works?</h2>
            <p>Ans: React works in declarative code. At its very core, React basically maintains a tree. This tree is able to do efficient diff computations on the nodes. React allows us to effectively re-construct our DOM in JavaScript and push only those changes to the DOM which have actually occurred.</p>

            <h2>Q2: Difference between props and state in react.</h2>
            <p>Ans: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and it is local to the component only.</p>
        </div>
    );
};

export default Question;