import React, {Component} from 'react';
import Task from './Task/Task'

class Tasks extends Component{
    constructor(props) {
        super(props);
        console.log(props)
    }
    componentWillMount(){
        console.log("Inside componentWillMount() Tasks js ");
        
    }
    componentDidMount(){
        console.log('App did mount in Tasks.js');
    }
    
    componentWillReceiveProps(nextProps){
        console.log("inside component will receive props", nextProps)
    }
    
    shouldComponentUpdate(nextProps,nextState){
        console.log("update tasks js, inside should comp update", nextProps,nextState)
        return nextProps.tasks !== this.props.tasks;
    }
    componentWillUpdate(nextProps,nextState){
        console.log("WILL UPDATE INSIDE TASKS JS", nextProps,nextState)
    }
    componentDidUpdate(){
        console.log('App did update in Tasks.js');
    }
    render() {
        console.log("Render in Tasks.js")
        return this.props.tasks.map(  (task,index) => {
            return <Task
            click={()=>{this.props.clicked(index)}}
            name={task.name}
            date={task.date}
            key={task.id}
            changed={(event)=> this.props.changed(event, task.id)}
            />
        });
    }
}

export default Tasks;