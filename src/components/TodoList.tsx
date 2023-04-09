'use client'
import React, { useContext } from 'react';
import { TodoItem } from './TodoItem';
import { TodoContext } from '../contexts/TodoContext';

const TodoList: React.FC = () => {
    const context = useContext(TodoContext);
    if (!context) {
        return <div>Error: TodoContext is not defined</div>;
    }
    const { todos } = context;

    return (
        <div>
            <h2>Todo List</h2>
            {
                todos.length === 0 ? (
                    <p>No todos found.</p>
                ) : (
                    <div className="list-group list-group-checkable d-grid gap-2 border-0 w-auto">
                        {todos.map((todo) => (
                            <TodoItem key={todo.id} todo={todo} />
                        ))}
                    </div>)
            }
            <br />
        </div>


    );
};

export default TodoList;