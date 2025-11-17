import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContextProvider } from './Contexts'
function App() {
  const [todos, setTodos] = useState(0)

  const deleteTodo = (id) =>{

  }

  const update = (id, todo) =>{

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
