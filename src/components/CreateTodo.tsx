'use client'
import React, { useState } from 'react';
import { Todo } from "../models/Todo";

interface CreateTodoProps {
    onCreate: (todo: Omit<Todo, 'id'>) => void;
}

export const CreateTodo: React.FC<CreateTodoProps> = ({ onCreate }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('todo');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onCreate({ title, description, status });
        setTitle('');
        setDescription('');
        setStatus('todo');
    };

    return (
        <form onSubmit={handleSubmit}>

            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="todoTitle" placeholder="todo title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <label htmlFor="todoTitle">
                    Title
                </label>
            </div>

            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="todoDescription" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <label htmlFor="todoDescription">
                    Description
                </label>
            </div>

            <label htmlFor="todoStatus" className="form-label">Status</label>
            <select id="todoStatus" className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="todo">Todo</option>
                <option value="in-progress">In progress</option>
                <option value="block">Block</option>
                <option value="done">Done</option>
            </select>

            <div className="form-floating mb-3">
                <br />
                <button type="submit" className="btn btn-primary">Create</button>
            </div>
        </form>
    );
};