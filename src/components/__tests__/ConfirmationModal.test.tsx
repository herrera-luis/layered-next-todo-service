import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ConfirmationModal from '../ConfirmationModal';

describe('ConfirmationModal', () => {
    const onClose = jest.fn();
    const onConfirm = jest.fn();

    beforeEach(() => {
        render(
            <ConfirmationModal
                show={true}
                text="Are you sure you want to delete this item?"
                onClose={onClose}
                onConfirm={onConfirm}
            />
        );
    });

    it('renders ConfirmationModal component correctly', () => {
        expect(screen.getByText('Confirm Operation')).toBeInTheDocument();
        expect(
            screen.getByText('Are you sure you want to delete this item?')
        ).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
    });

    it('calls onClose when the Cancel button is clicked', () => {
        fireEvent.click(screen.getByRole('button', { name: /cancel/i }));
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('calls onConfirm when the Delete button is clicked', () => {
        fireEvent.click(screen.getByRole('button', { name: /delete/i }));
        expect(onConfirm).toHaveBeenCalledTimes(1);
    });
});