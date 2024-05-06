import { useState } from 'react'
import './App.css'

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const handleInputChange = (event) => {
    setTodoInput(event.target.value);
  };
  const addTodo = () => {
    const newTodo = {
      id: Math.random(), 
      text: todoInput 
    };
    setTodos([...todos, newTodo]);
    setTodoInput("");
  };
  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
        <form onSubmit={(event) => {
        event.preventDefault();
        addTodo();
      }}>
      <div className='bsk-1'><label htmlFor=""> To Do List (Hedef)</label> </div>  
      <input 
          type="text"
          value={todoInput} 
          onChange={handleInputChange} 
        /> 
        <button type="submit">Ekle</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={() => removeTodo(todo.id)}>{todo.text}</li>
        ))}
      </ul>
    </>
  );}


export default App
