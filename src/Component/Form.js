import React from "react";
const Form = ({setInputText , setTodos ,todos,inputText ,setStatus}) => {
    const inputTextHandler = (e) =>{
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([...todos,{
            id:Math.random()*1000000,text:inputText,complete:false
        }])
        setInputText('')
    }
    const statusHandler =(e)=>{
        setStatus(e.target.value)
    }
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button">
             <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="complete">Complete</option>
                    <option value="uncomplete">Uncomplete</option>
                </select>
            </div>
        </form>
    );
}
export default Form;