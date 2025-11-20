import React, { useState } from 'react'
import { useTodo } from '../Contexts'
import {nanoid} from 'nanoid'

function Task() {
        const [task, setTask] = useState("")
        const {add} = useTodo()

        const handleSubmit = (e) => {
            e.preventDefault()
            if(!task) {
                console.log("task not found")
                return
            }
            add({id: nanoid(), task: task, completed: false})
            setTask("")
        }

  return (
    <div>
        Add a task:
        <form onSubmit={(e)=> handleSubmit(e)}>
            <input 
            type='text'
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Task