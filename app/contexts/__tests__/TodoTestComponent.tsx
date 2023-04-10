import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { TodoContext } from '../TodoContext';
import { Todo } from '../../models/Todo';
import React from 'react';

const API_BASE_URL = 'http://localhost:8000';

const server = setupServer(
    rest.get(`${API_BASE_URL}/api/v1/todos/`, (req, res, ctx) => {
        return res(ctx.json([{ id: 1, title: 'Test Todo', description: 'This is a test', status: 'todo' }]));
    }),
    rest.post(`${API_BASE_URL}/api/v1/todos/`, (req, res, ctx) => {
        return res(ctx.json({ id: 2, title: 'New Todo', description: 'Another test', status: 'todo' }));
    }),
    rest.put(`${API_BASE_URL}/api/v1/todos/:id`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
    rest.delete(`${API_BASE_URL}/api/v1/todos/:id`, (req, res, ctx) => {
        return res(ctx.status(200));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export const TodoTestComponent = () => {
    const { todos, currentTodo, setCurrentTodo, addTodo, updateTodo, deleteTodo } = React.useContext(TodoContext);

    const handleAddTodo = async () => {
        const newTodo: Todo = { id: 1, title: 'New Todo', description: 'Another test', status: 'todo' };
        await addTodo(newTodo);
    };

    const handleUpdateTodo = async () => {
        const todoToUpdate = todos.find((todo) => todo.id === 1);
        if (todoToUpdate) {
            const updatedTodo: Todo = { ...todoToUpdate, title: 'Updated Todo', description: 'Updated test', status: 'todo' };
            await updateTodo(updatedTodo);
        }

    };

    const handleDeleteTodo = async () => {
        await deleteTodo(1);
    };

    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id}>{todo.title}</div>
            ))}
            {currentTodo && <div>Current Todo: {currentTodo.title}</div>}
            <button onClick={handleAddTodo}>Add Todo</button>
            <button onClick={handleUpdateTodo}>Update Todo</button>
            <button onClick={handleDeleteTodo}>Delete Todo</button>
        </>
    );
};