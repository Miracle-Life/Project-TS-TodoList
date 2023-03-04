import React, {useEffect, useRef, useState} from "react";
import {ITodo} from "../types/data";
import {TodoList} from "./TodoList";

export const App: React.FC = () => {

    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    }

    const addTodo = () => {
        const newTodo: ITodo = {
            id: Date.now(),
            title: value,
            completed: false
        }
        setTodos([...todos, newTodo]);
        setValue('');
    }

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id));
        setValue('');
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }));
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [todos]);

    return (
        <div>
            <div className="container">
                <input value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef} type="text"/>
                <button onClick={addTodo}>Add</button>
            </div>
            <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </div>
    );
};