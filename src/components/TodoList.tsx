import React from "react";
import {ITodo} from "../types/data";
import {TodoItem} from "./TodoItem";

interface ITodoListProps {
    items: ITodo[];
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {

    const {items, toggleTodo, removeTodo} = props;

    return (
        <div>
            {items.map((item) =>
                <TodoItem
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                    key={item.id}
                    {...item}
                />)
            }
        </div>
    );
};

export {TodoList};