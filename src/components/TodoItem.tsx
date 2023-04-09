import React from 'react';
import { Todo } from '../models/Todo';

interface TodoItemProps {
    todo: Todo;
}
type TodoStatus = 'todo' | 'in-progress' | 'block' | 'done';

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    return (
        <div>
            <a href="#" className="list-group-item rounded-3 py-3">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{todo.title}</h5>
                    <small><span>{calculateTimeElapsed(todo.created_at)}</span></small>
                </div>
                <p className="mb-1">{todo.description}</p>
                <span className={`badge ${getBadgeColor(todo.status as TodoStatus)}`}>{todo.status}</span>
            </a>
            {/* Add buttons or controls for updating and deleting the todo */}
        </div>
    );
};

function calculateTimeElapsed(created_at: string): string {
    const createdAt = new Date(created_at);
    const now = new Date();
    const timeDifference = now.getTime() - createdAt.getTime();

    const daysPassed = Math.floor(timeDifference / (1000 * 3600 * 24));
    const hoursPassed = Math.floor(timeDifference / (1000 * 3600));

    return daysPassed === 0
        ? `${hoursPassed} hour(s) ago`
        : `${daysPassed} day(s) ago`;
}


const getBadgeColor = (status: TodoStatus): string => {
    const statusColors: Record<TodoStatus, string> = {
        todo: 'bg-secondary',
        'in-progress': 'bg-primary',
        block: 'bg-warning',
        done: 'bg-success',
    };
    return statusColors[status];
};