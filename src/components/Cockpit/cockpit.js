import React from 'react';
import classes from './cockpit.css'

const cockpit = (props) => {
    const assignedClasses =[];
    // console.log(props)
    // if(props.tasks.length <=2){
    //   assignedClasses.push('blue');
    // }
    // if(props.state.tasks.length <=1){
    //   assignedClasses.push('bold');
    // } 
    return (
        <div className={classes.cockpit}>
        <h1 className={assignedClasses.join( )} > {props.title}</h1>
        <button 

        onClick={props.clicked}>Toggle Tasks</button>
        </div>
    );
}


export default cockpit;