import React, {Component} from 'react';
// import Radium from 'radium';


import './Task.css';

class Task extends Component {
    constructor(props) {
        super(props);
        console.log(props)
      }
      componentWillMount(){
        console.log("Inside componentWillMount() Task js ");
        
      }
      componentDidMount(){
        console.log('App did mount in Task.js');
      }
    render() {
        console.log("Render in Task.js")
        return (        
            <div className="Task">
                <p onClick={this.props.click}>{this.props.name}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}

export default Task;