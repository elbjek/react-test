import React from 'react';
// import Radium from 'radium';


import './Task.css';


const task = (props) => {
    // const style = {
    //     '@media(min-width:500px)':{
    //         width:'300px'
    //     }
    // };
    return (
        <div className="Task">
            <p onClick={props.click}>{props.name}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default task;