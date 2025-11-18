import React, { useEffect, useState } from 'react'

function Todos({todo}) {
    const [tod, settod] = useState(todo.task)
  return (
    <div>
        <input type="text" 
        readOnly
        value={tod}
        onChange={(e)=>settod(e.target.value)}
        />
    </div>
  )
}

export default Todos