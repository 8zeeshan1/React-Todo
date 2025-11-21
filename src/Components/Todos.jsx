import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useTodo } from '../Contexts/TodoContext'

function Todos({todo}) {
    const [tod, settod] = useState(todo.task)
    const {deleteTodo, complete, update} = useTodo()
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const inptRef = useRef()

    const handleEdit = () =>{
      console.log("i am in the editing part of the edit button")
       if(todo.completed){
        setIsTodoEditable(false)
        return
      }
      setIsTodoEditable(true)
        setTimeout(() => {
      inptRef.current.focus()
    }, 0)
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
    <div className='container mx-auto'>
    <div className='flex justify-center items-center'>
      <input type='checkbox' className=' m-2 size-8' checked={todo.completed} onChange={()=>handleComplete()}/>
      <input 
      type="text" 
      ref={inptRef}
      className='border w-3xl h-13 p-2 rounded-2xl'
      style={todo.completed?{textDecoration: "line-through", background: "lightgreen"}: {background: "lightblue"}}
      readOnly = {!isTodoEditable}
      value={tod}
      onChange={(e)=>settod(e.target.value)}
      />
      <div className='m-2 align-middle'>
      <button className='border m-2 p-2 w-15 h-13 align-middle bg-red-400 hover:bg-red-500 hover:bg-amber-400' onClick={(e)=>{deleteTodo(todo.id)}}>X</button>
      </div>
      <div className='m-2'>
      <button className='border p-2 m-2 w-18 h-13 bg-amber-200 hover:bg-amber-400 hover:border-4 ' onClick={()=>{!isTodoEditable?handleEdit():handleDone()}}>{isTodoEditable?"Done":"Edit"}</button>
      </div>
    </div>
    </div>
  )
}

export default Todos