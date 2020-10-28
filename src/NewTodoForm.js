import React, { useState } from "react";
import {v1 as uuid} from 'uuid'
 
const NewTodoForm = ({createTodo}) => {
    const [task, setTask] = useState("")

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const getInput = (e) => {
        e.preventDefault();
        createTodo({task, id: uuid()})
        setTask('')
    }

    return (
        <div>
            <form onSubmit={getInput}>
                <label htmlFor="task">Task: </label>
                <input 
                    id="task"
                    name="task"
                    type="text"
                    onChange={handleChange}
                    value={task}
                />
                <button>Add a todo!</button>
            </form>
        </div>
    )
}



export default NewTodoForm