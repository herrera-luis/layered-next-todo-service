import React from 'react';
import { Todo } from '../models/Todo';
import { TodoItem } from './TodoItem';

interface TodoListProps {
    todos: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    return (
        <div>
            <h2>Todo List</h2>
            <div className="list-group list-group-checkable d-grid gap-2 border-0 w-auto">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </div>
        </div>


    );
};