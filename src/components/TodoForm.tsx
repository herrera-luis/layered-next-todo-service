'use client'
import { useState, useContext, useEffect } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { Todo } from '../models/Todo';



const TodoForm: React.FC = () => {
    const { addTodo, updateTodo, currentTodo } = useContext(TodoContext);
    const [todo, setTodo] = useState<Todo>(currentTodo ? currentTodo : { title: '', description: '', status: "todo" });

    useEffect(() => {
        if (currentTodo) {
            setTodo(currentTodo);
        } else {
            setTodo({ title: '', description: '', status: "todo" });
        }
    }, [currentTodo]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (currentTodo) {
            updateTodo({ ...todo, id: currentTodo.id, created_at: currentTodo.created_at });
        } else {
            addTodo(todo);
        }
        setTodo({ title: '', description: '', status: "todo" });
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setTodo({
            ...todo,
            [name]: value
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">

                <input
                    type="text"
                    className="form-control"
                    id="todoTitle"
                    name="title"
                    value={todo?.title}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="todoTitle">
                    Title
                </label>
            </div>

            <div className="form-floating mb-3">

                <textarea
                    className="form-control"
                    id="todoDescription"
                    name="description"
                    value={todo?.description}
                    onChange={handleChange}
                    required
                ></textarea>
                <label htmlFor="description">
                    Description
                </label>
            </div>

            <label htmlFor="status" >
                Status
            </label>
            <select
                className="form-select"
                id="todoStatus"
                name="status"
                value={todo?.status}
                onChange={handleChange}
                required
            >
                <option value="todo">Todo</option>
                <option value="in-progress">In Progress</option>
                <option value="block">Block</option>
                <option value="done">Done</option>
            </select>

            <div className="form-floating mb-3">
                <br />
                <button type="submit" className={`btn btn-${currentTodo ? 'info' : 'primary'} `}>
                    <i className={`bi bi-${currentTodo ? 'arrow-clockwise' : 'save'} `}>{currentTodo ? ' Update' : ' Create'}</i>

                </button>
            </div>
        </form>
    );
};

export default TodoForm;