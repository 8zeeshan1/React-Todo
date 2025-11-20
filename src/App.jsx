import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContextProvider } from './Contexts'
import Task from './Components/Task'
import Todos from './Components/Todos'
function App() {
  const [todos, setTodos] = useState([])

  const deleteTodo = (id) =>{
    setTodos((prev)=> prev.filter((prevTodo)=> prevTodo.id !== id)) //This will filter out those todos whose id's are not same to the id assigned in parameter.
  }

  const update = (id, todo) =>{
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? todo : prevTodo))
  }

  const add = (todo) => {
    setTodos((prev) => [todo, ...prev]) //Changed myself 
  }

  const complete = (id) =>{ 
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id? {...prevTodo, completed: !prevTodo.completed }: {...prevTodo}))  //changed
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <TodoContextProvider value={{todos, add, update, deleteTodo, complete }}>
        <Task/>
        <hr/>
        <h2>Todos</h2>
        {todos.map((todo)=>
          <Todos todo = {todo} key={todo.id}/>
        )
        }
      </TodoContextProvider>
    </>
  )
}

export default App
