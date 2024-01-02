import React, { useState, useEffect } from "react";

const Todos = ({ todos, updateTodo, deleteTodo }) =>
{

    return (
        <div className="main-todo">
            {
                todos && todos.map((todo) =>
                {
                    return (
                        <div className="todo-box">
                            <div className="left">{todo.title}</div>
                            <div className="right">
                                <button onClick={() =>
                                {
                                    deleteTodo(todo.id)
                                }}>Delete</button>
                                <button onClick={() =>
                                {
                                    updateTodo(todo.id)
                                }}>Edit</button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Todos