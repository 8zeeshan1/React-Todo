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
    <div className='container p-2.5 m-3'>
        <label className='text-3xl align-super'><b>Add a task:</b></label>
        <form className='flex justify-center items-center' onSubmit={(e)=> handleSubmit(e)}>
            <input 
            className='border w-3xl h-5xl bg-white p-3 rounded-2xl m-3'
            type='text'
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            />
            <button type='submit' className='border p-3 w-18 rounded-xl bg-green-300 '>Add</button>
        </form>
    </div>
  )
}

export default Task