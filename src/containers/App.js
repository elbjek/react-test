import React, { Component } from 'react';
import './App.css';
import Tasks from '../components/Tasks/Tasks';
import Cockpit from '../components/Cockpit/cockpit'
class App extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  componentWillMount(){
    console.log("Inside componentWillMount() ");
    
  }
  componentDidMount(){
    console.log('App did mount');
  }
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
  render() {
    console.log("render");
    
    // const style = {
    //   backgroundColor:'salmon',
    //   font:'inherit',
    //   border:"2px solid pink",
    //   padding:'8px 14px',
    //   borderRadius:'8px', 
    //   cursor:'pointer',
    // }
    let tasks = null;
    
    if(this.state.showTasks){
      tasks = (
          <Tasks 
          tasks={this.state.tasks}
          clicked={this.deleteTaskHandler}
          changed={this.taskChangedHandler} />);
      } 

      return (
        
        <div className="App">
        <Cockpit 
        title={this.props.title}
        showTasks={this.state.showTasks}
        tasks={this.state.tasks}
        clicked={this.toggleTasksHandler}/>
        {tasks}
        </div>
        );
        
      }
    }
    
    export default  App;
