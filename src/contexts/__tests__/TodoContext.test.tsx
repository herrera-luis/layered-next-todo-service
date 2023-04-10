import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { TodoProvider } from '../TodoContext';
import { TodoTestComponent } from './TodoTestComponent';
import React from 'react';

const renderWithContext = (component: React.ReactNode) => {
    return render(<TodoProvider>{component}</TodoProvider>);
};

describe('TodoContext', () => {
    it('fetches todos from the API and renders them', async () => {
        renderWithContext(<TodoTestComponent />);
        await waitFor(() => expect(screen.getByText('Test Todo')).toBeInTheDocument());
    });

    it('adds a todo using the context', async () => {
        renderWithContext(<TodoTestComponent />);
        fireEvent.click(screen.getByText('Add Todo'));
        await waitFor(() => expect(screen.getByText('New Todo')).toBeInTheDocument());
    });

    it('updates a todo using the context', async () => {
        renderWithContext(<TodoTestComponent />);
        await waitFor(() => expect(screen.getByText('Test Todo')).toBeInTheDocument());
        fireEvent.click(screen.getByText('Update Todo'));
        await waitFor(() => expect(screen.getByText('Updated Todo')).toBeInTheDocument());
    });

    it('deletes a todo using the context', async () => {
        renderWithContext(<TodoTestComponent />);
        fireEvent.click(screen.getByText('Delete Todo'));
        await waitFor(() => expect(screen.queryByText('Test Todo')).not.toBeInTheDocument());
    });
});