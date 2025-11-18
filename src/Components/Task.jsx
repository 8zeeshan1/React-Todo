import React, { useState } from 'react'
import { useTodo } from '../Contexts'
import {nanoid} from 'nanoid'

function Task() {
        const [task, setTask] = useState()
        const {add} = useTodo()
        const handleSubmit = (e) => {
            e.preventDefault()
            if(!task) {
                console.log("task not found")
                return
            }
            console.log(task)
            add({id: nanoid(), task: task, completed: false})
        }
  return (
    <div>
        Add a task:
        <form onSubmit={(e)=> handleSubmit(e)}>
            <input onChange={(e)=>setTask(e.target.value)}
                type='text'
            />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Task