import React from 'react';
import { Todo } from '../models/Todo';

interface TodoItemProps {
    todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    return (
        <div>
            <a href="#" className="list-group-item rounded-3 py-3">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{todo.title}</h5>
                    <small>3 days ago</small>
                </div>
                <p className="mb-1">{todo.description}</p>
                <span className="badge bg-secondary">{todo.status}</span>
            </a>
            {/* Add buttons or controls for updating and deleting the todo */}
        </div>
    );
};