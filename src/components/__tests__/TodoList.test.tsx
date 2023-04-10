import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../TodoList';
import { TodoContext } from '../../contexts/TodoContext';
import { TodoContextType } from '../../models/Todo';

const mockTodos = [
    { id: 1, title: 'Test Todo 1', description: 'This is a test todo 1', status: 'todo', created_at: '2023-03-15T12:00:00.000Z' },
    { id: 2, title: 'Test Todo 2', description: 'This is a test todo 2', status: 'in-progress', created_at: '2023-03-15T13:00:00.000Z' },
];

const mockTodoContext: TodoContextType = {
    todos: mockTodos,
    addTodo: () => { },
    updateTodo: () => { },
    deleteTodo: () => { },
    setCurrentTodo: () => { },
    currentTodo: null,
};

describe('TodoList', () => {
    test('renders TodoList component', () => {
        render(
            <TodoContext.Provider value={mockTodoContext}>
                <TodoList />
            </TodoContext.Provider>
        );

        expect(screen.getByText('Test Todo 1')).toBeInTheDocument();
        expect(screen.getByText('Test Todo 2')).toBeInTheDocument();
    });
});