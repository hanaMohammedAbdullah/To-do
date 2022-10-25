import React,{useEffect, useState} from "react";
import './App.css';
import Form from './Component/Form';
import TodoList from './Component/TodoList';

function App() {
   const [inputText, setInputText] = useState("");
   const [todos, setTodos] = useState([]);
   const [status, setStatus] = useState("all");
   const [filerTodos, setFilerTodos] = useState([]);

   
   useEffect(()=>{
   getLocalStorage();},[]);
   useEffect(() => {
     filterHandler();
     saveLocalStorage();
   }, [todos,status])
   
   const filterHandler = () => {
    switch(status){
    case "complete":
      setFilerTodos(todos.filter(todo => todo.complete === true));
      break;
      case "uncomplete":
      setFilerTodos(todos.filter(todo => todo.complete === false));
      break;
      default:
        setFilerTodos(todos);
        break;
   }
  }
  const getLocalStorage = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos",JSON.stringify([]))
    }else{
      let localtodos= JSON.parse(localStorage.getItem("todos"));
      setTodos(localtodos);
      console.log(todos)
    }
   }
   const saveLocalStorage = () => {
    localStorage.setItem('todos',JSON.stringify(todos))
   
 }
  return (
    <div className="App">
      <header className="App-header">
      Hana Todo List
      </header>
       <Form setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
       <TodoList  todos={filerTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
