import React, { Component } from 'react';
import './App.css';
// import Radium,{StyleRoot} from 'radium';
import Task from './Task/Task';

class App extends Component {
  state ={
    tasks:[
      { id:1, name:'Task Name One',date:Date.now()},
      { id:2, name:'Task Name Two',date:Date.now()},
      { id:3, name:'Task Name Three',date:Date.now()}
    ],
    newTasks:[],
    showTasks:false
  }
  
  // addTaskHandler = (newTask) =>{
  //   // console.log('aloha')
  //   // this.state.tasks[0].name = 'new Task One'
  //   this.setState({
  //     tasks:[
  //       {name:'Task Name One New',date:'25.22.1987'},
  //       {name:newTask,date:'15.11.1994'},
  //       {name:' New Task Name Three',date:'25.22.1987'},
  //     ] 
  //   })
  // }
  deleteTaskHandler = (taskIndex) => {
    const tasks = this.state.tasks.slice();
    tasks.splice(taskIndex , 1);
    this.setState({tasks: tasks})
  }
  toggleTasksHandler = () => { 
    const doesShow = this.state.showTasks;
    this.setState({showTasks: !doesShow})
  }
  taskChangedHandler = (event, id) => {
    const taskIndex = this.state.tasks.findIndex(t => {
      return t.id === id;
    });
    const task = {
      ...this.state.tasks[taskIndex]
    };
    task.name = event.target.value;
    const tasks = [...this.state.tasks];
    tasks[taskIndex] = task;
    this.setState({tasks:tasks}) 
  }
  // createNewHandler = (event,id) => {
  //   console.log(event.target.value)
  // }
  
  // addNewHandler =() =>{
  //   console.log("im working");
  // }
  render() {
    const style = {
      backgroundColor:'salmon',
      font:'inherit',
      border:"2px solid pink",
      padding:'8px 14px',
      borderRadius:'8px', 
      cursor:'pointer',
      // ':hover':{
      //   backgroundColor:'lightblue',
      //   color:'white'
      // }
    }
    let tasks = null;
    
    if(this.state.showTasks){
      tasks = (
        <div>
        {this.state.tasks.map((task, index) => {
          return <Task 
          click={() => this.deleteTaskHandler(index)}
          name={task.name} 
          date={task.date}
          key={task.id}
          changed={(event)=> this.taskChangedHandler(event, task.id)} />
        })}
        </div>
        );
        style.backgroundColor ='pink';
        // style[':hover']={
        //   backgroundColor:'lightred',
        //   color:'black'
        // }
      } 
      const classes =[];
      if(this.state.tasks.length <=2){
        classes.push('blue');
      }
      if(this.state.tasks.length <=1){
        classes.push('bold');
      }
      return (
        // <StyleRoot>
        <div className="App">
        <h1 className={classes.join( )} > My Tasks</h1>
        <button 
        style={style}
        onClick={this.toggleTasksHandler}>Toggle Tasks</button>
        {tasks}
        <button onClick={(event)=> this.addNewHandler()}>Add New</button>
        </div>
        // </StyleRoot>
        );
        
      }
    }
    
    export default  App;
