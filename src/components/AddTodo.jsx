import React, { useState } from "react";

const AddTodo = ({ todos, setTodos, updateTodoId, setUpdateTodoId }) =>
{
    const [todo, setTodo] = useState("");

    const handleAddTodo = async () =>
    {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            body: JSON.stringify({
                userId: 1,
                title: todo,
                completed: false,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        const data = await res.json()

        console.log("data>>>>>>>>>", data)
        setTodos([data, ...todos])
        setTodo("")

    }

    const handleUpdateTodo = async () =>
    {
        await fetch(`https://jsonplaceholder.typicode.com/todos/${updateTodoId}`, {
            method: "PUT",
            body: JSON.stringify({
                id: updateTodoId,
                title: todo
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        setUpdateTodoId(null)
        setTodo("")
    }

    const handleChange = (e) =>
    {
        setTodo(e.target.value)
    }

    return (
        <div className="add-todo-main">
            <div className="add-todo">
                <input type="text" placeholder="Enter Task" value={todo} onChange={handleChange} />
                {
                    updateTodoId ? <button onClick={handleUpdateTodo}>Update</button> : <button onClick={handleAddTodo}>Add </button>
                }


            </div>
        </div>
    )
}

export default AddTodo