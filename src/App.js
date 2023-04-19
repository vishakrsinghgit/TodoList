import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';

function Todo({todo,index,completeTodo,removeTodo,updateTodo}){
  return(
    <div className="todo" style={{color:todo.isCompleted?"rgb(255,0,38)":""}}>
      {todo.text}
      <div>
        <button onClick={()=>{completeTodo(index)}}>Complete</button>
        <button onClick={()=>{removeTodo(index)}}>Delete</button>
        
      </div>
    </div>
  );
};
function TodoForm({addTodo}){
  const [value,setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if(!value){
      return;
    }
    addTodo(value);
    setValue("");
  }
  return(
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input'
        value ={value}
        onChange={e=>setValue(e.target.value)}
      />
      <button type='submit'>Add</button>
      
    </form>
  ) 

}

//update

function UpdateForm({updateTodo}){
  
  const handleSubmit = e => {
    e.preventDefault();
    if(!upvalue){
      return;
    }
    updateTodo(upvalue);
    upsetValue("");
  }
  return(
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input'
        value ={upvalue}
        onChange={e=>upsetValue(e.target.value)}
      />
      <button type='submit'>update</button>
      
    </form>
  ) 

}


function App() {
  const [upvalue,upsetValue] = useState("");
  const [todos,setTodos] = useState([
    {
      text: "Learn react",
      isCompleted: false
    },
    {
      text: "Build Todo List",
      isCompleted: false
    },
    {
      text : "Build Website",
      isCompleted: false
    },
    {
      text: "Start Freelancing",
      isCompleted: false
    }
  ]);
  const addTodo = (text) =>{
    const newTodo = [...todos,{text}];
    setTodos(newTodo);
    localStorage.setItem('todos',JSON.stringify(newTodo));
  };
  const completeTodo = (index) =>{
    const newTodo = [...todos];
    newTodo[index].isCompleted = true;
    setTodos(newTodo);

  };
  const removeTodo = (index)=>{
    const newTodo =[...todos];
    newTodo.splice(index,1);
    setTodos(newTodo);
  };
  const updateTodo = (uptodo,index)=> {
    const newTodo = [...uptodo];
    set(uptodo.text);

  }

  // useEffect(()=> {
  //   localStorage.setItem('todos',JSON.stringify(todos));
  //   console.log("setting todos");
  // },[todos]);

  useEffect(()=> {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if(todos){
      setTodos(todos);
    }
    console.log("getting todos");
  },[]);
  return (
    <div className="app">
      <div className="todo-list">
        {
          todos.map((todo,index)=>{
            return <Todo 
            key={index}
            index={index}
            todo ={todo}
            completeTodo ={completeTodo}
            removeTodo = {removeTodo}
            updateTodo = {updateTodo}
            />
        })}
        <TodoForm addTodo ={addTodo}/>
        <UpdateForm updateTodo = {updateTodo}/>
      </div>
    </div>
  );
}

export default App;
