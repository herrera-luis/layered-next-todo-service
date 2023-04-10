import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from '../TodoItem';
import React from 'react';

describe('TodoItem', () => {
    const todo = {
        id: 1,
        title: 'Test Todo',
        description: 'This is a test todo',
        status: 'todo',
        created_at: '2023-03-15T10:00:00.000Z',
    };

    it('renders TodoItem component correctly', () => {
        render(<TodoItem todo={todo} />);

        expect(screen.getByText(todo.title)).toBeInTheDocument();
        expect(screen.getByText(todo.description)).toBeInTheDocument();
        expect(screen.getByText(/day\(s\) ago/i)).toBeInTheDocument();
    });

    it('shows edit and delete buttons', () => {
        render(<TodoItem todo={todo} />);

        const editButton = screen.getByRole('button', { name: /edit/i });
        const deleteButton = screen.getByRole('button', { name: /delete/i });

        expect(editButton).toBeInTheDocument();
        expect(deleteButton).toBeInTheDocument();
    });

});