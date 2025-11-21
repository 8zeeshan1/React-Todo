import React, { useCallback, useEffect, useState } from 'react'
import { useTodo } from '../Contexts/TodoContext'

function Todos({todo}) {
    const [tod, settod] = useState(todo.task)
    const {deleteTodo, complete, update} = useTodo()
    const [isTodoEditable, setIsTodoEditable] = useState(false)

    const handleEdit = () =>{
      console.log("i am in the editing part of the edit button")
       if(todo.completed){
        setIsTodoEditable(false)
        return
      }
      setIsTodoEditable(true)
    }

    const handleDone = () =>{
      update(todo.id, tod)
      setIsTodoEditable(false)
    }

    const handleComplete = () => {
      setIsTodoEditable(false)
      complete(todo.id)
    }

  return (
    <div>
      <input type='checkbox' checked={todo.completed} onChange={()=>handleComplete()}/>
      <input 
      type="text" 
      style={todo.completed?{textDecoration: "line-through", background: "lightgreen"}: {}}
      readOnly = {!isTodoEditable}
      value={tod}
      onChange={(e)=>settod(e.target.value)}
      />
      <button onClick={(e)=>{deleteTodo(todo.id)}}>X</button>
      <button onClick={()=>{!isTodoEditable?handleEdit():handleDone()}}>{isTodoEditable?"Done":"Edit"}</button>
    </div>
  )
}

export default Todos