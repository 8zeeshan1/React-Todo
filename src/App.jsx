import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContextProvider } from './Contexts'
function App() {
  const [todos, setTodos] = useState(0)

  const deleteTodo = (id) =>{
    setTodos((prev)=> prev.filter((prevTodo)=> prevTodo.id !== id))//This will filter out those todos whose id's are not same to the id assigned in parameter.
  }

  const update = (id, todo) =>{
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? todo : prevTodo))
  }

  const add = (todo) => {
    setTodos((prev) => [{...todo }, ...prev]) //Changed myself 
  }

  const complete = () =>{ 

  }

  return (
    <>
      <TodoContextProvider value={{todos, add, update, deleteTodo, complete }}>

      </TodoContextProvider>
    </>
  )
}

export default App
