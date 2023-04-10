import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from '../TodoForm';
import React from 'react';

describe('TodoForm', () => {
    it('renders TodoForm component correctly', () => {
        render(<TodoForm />);

        expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/status/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /create/i })).toBeInTheDocument();
    });

    it('handles form input changes', () => {
        render(<TodoForm />);

        const titleInput = screen.getByLabelText(/title/i);
        fireEvent.change(titleInput, { target: { value: 'New Todo' } });
        expect(titleInput).toHaveValue('New Todo');
    });
});