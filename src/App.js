import React, {Component} from "react";
import ToDo from "./components/ToDo";
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      todos:[
          { description: 'Walk the cat', isCompleted: true },
          { description: 'Throw the dishes away', isCompleted: false },
          { description: 'Buy new dishes', isCompleted: false }
    ],
    newTodoDescription: ''
  };
}

toggleComplete(index){
  const todos = this.state.todos.slice();
  const todo = todos[index];
  todo.isCompleted = todo.isCompleted ? false : true;
  this.setState({ todos: todos });
}

handleSubmit(e){
  if(!this.state.newTodoDescription){return true}
  e.preventDefault();
  const newToDo = {description: this.state.newTodoDescription, isCompleted:false};
  this.setState({todos: [...this.state.todos, newToDo], newTodoDescription:""})
}

handleChange(e){
  this.setState({newTodoDescription: e.target.value})
}

deleteToDo(index){
  const result = this.state.todos.filter((element, indx)=>{
    return indx !== index
  })
  this.setState({todos: result})
}

  render(){
    return(
      <div className="App">
      {this.state.todos.map((todo, index) => 
        <ToDo key={index} description={todo.description} isCompleted={todo.isCompleted} toggleComplete={()=> this.toggleComplete(index)} deleteToDo={()=>this.deleteToDo(index)}/>
      )}
     
    <form onSubmit={(e)=> this.handleSubmit(e)}>
      <input type="text" value={this.state.newTodoDescription} onChange={(e)=>{this.handleChange(e)}}/>
      <input type="submit"/>
    </form>
      
      </div>
    )
  }
}

export default App;
