import React, { useState } from 'react';
import { TodoItemProps } from '../models/Todo';
import { TodoContext } from '../contexts/TodoContext';
import ConfirmationModal from "./ConfirmationModal";

type TodoStatus = 'todo' | 'in-progress' | 'block' | 'done';

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const { setCurrentTodo, deleteTodo } = React.useContext(TodoContext);
    const [showModal, setShowModal] = useState(false);

    const handleDeleteClick = () => {
        setShowModal(true);
    };

    const handleConfirmDelete = () => {
        deleteTodo(todo.id);
        setShowModal(false);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div className="list-group-item rounded-3 py-3">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{todo.title}</h5>
                    <small><span>{calculateTimeElapsed(todo.created_at)}</span></small>
                </div>
                <p className="mb-1">{todo.description}</p>
                <span className={`badge ${getBadgeColor(todo.status as TodoStatus)}`}>{todo.status}</span>
                <br /><br />
                <div className="d-flex gap-2 mb-3">
                    <button type="button" className="btn btn-outline-info btn-sm" onClick={() => setCurrentTodo(todo)}>
                        <i className="bi bi-pencil"> Edit</i>
                    </button>
                    <button type="button" className="btn btn-outline-danger btn-sm" onClick={handleDeleteClick}>
                        <i className="bi bi-trash"> Delete</i>
                    </button>
                </div>
            </div>

            <ConfirmationModal
                show={showModal}
                onClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
                text={`Are you sure you want to delete TODO: ${todo.title}?`}
            />
        </div>
    );
};

function calculateTimeElapsed(created_at: string | undefined): string {
    const createdAt = new Date(created_at!);
    const now = new Date();
    const timeDifference = now.getTime() - createdAt.getTime();

    const daysPassed = Math.floor(timeDifference / (1000 * 3600 * 24));
    const hoursPassed = Math.floor(timeDifference / (1000 * 3600));
    const minutesPassed = Math.floor(timeDifference / (1000 * 60));

    const timeUnits = [
        { value: daysPassed, unit: 'day(s) ago' },
        { value: hoursPassed, unit: 'hour(s) ago' },
        { value: minutesPassed, unit: 'minute(s) ago' },
    ];

    const result = timeUnits.find((timeUnit) => timeUnit.value > 0) || { value: 0, unit: 'minute(s) ago' };

    return `${result.value} ${result.unit}`;
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