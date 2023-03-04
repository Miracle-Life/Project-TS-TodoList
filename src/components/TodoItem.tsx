import React from "react";
import {ITodo} from "../types/data";

interface ITodoItem extends ITodo {
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
    const {id, title, completed, removeTodo, toggleTodo} = props;
    return (
        <div>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTodo && toggleTodo(id)}
            />
            <span
                style={{
                    marginLeft: '10px',
                    textDecoration: completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                    color: completed ? 'green' : 'black',
                    fontWeight: completed ? 'bold' : 'normal',
                    display: 'inline-block',
                    margin: '0 10px'
                }}
            >{title}</span>
            <button
                style={{
                    marginLeft: '10px',
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px'
                }}
                onClick={() => removeTodo(id)}>X
            </button>
        </div>
    );
};

export {TodoItem};