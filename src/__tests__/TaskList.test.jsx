import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from '../components/TaskList';

describe('TaskList Component', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('renders TaskList component', () => {
        render(<TaskList />);
        expect(screen.getByText('Task Manager')).toBeInTheDocument();
    });

    test('adds a new task', () => {
        render(<TaskList />);
        const input = screen.getByTestId('new-task-input');
        const addButton = screen.getByTestId('add-task-button');

        fireEvent.change(input, { target: { value: 'New test task' } });
        fireEvent.click(addButton);

        expect(screen.getByText('New test task')).toBeInTheDocument();
    });

    test('shows error when trying to add empty task', () => {
        render(<TaskList />);
        const addButton = screen.getByTestId('add-task-button');

        fireEvent.click(addButton);

        expect(screen.getByText('Task cannot be empty')).toBeInTheDocument();
    });

    test('deletes a task', () => {
        render(<TaskList />);
        const input = screen.getByTestId('new-task-input');
        const addButton = screen.getByTestId('add-task-button');

        fireEvent.change(input, { target: { value: 'Task to delete' } });
        fireEvent.click(addButton);

        const deleteButton = screen.getByTestId('delete-button');
        fireEvent.click(deleteButton);

        expect(screen.queryByText('Task to delete')).not.toBeInTheDocument();
    });

    test('edits a task', () => {
        render(<TaskList />);
        const input = screen.getByTestId('new-task-input');
        const addButton = screen.getByTestId('add-task-button');

        fireEvent.change(input, { target: { value: 'Task to edit' } });
        fireEvent.click(addButton);

        const editButton = screen.getByTestId('edit-button');
        fireEvent.click(editButton);

        const editInput = screen.getByTestId('edit-task-input');
        const saveButton = screen.getByTestId('save-edit-button');

        fireEvent.change(editInput, { target: { value: 'Edited task' } });
        fireEvent.click(saveButton);

        expect(screen.getByText('Edited task')).toBeInTheDocument();
    });

    test('toggles task completion', () => {
        render(<TaskList />);
        const input = screen.getByTestId('new-task-input');
        const addButton = screen.getByTestId('add-task-button');

        fireEvent.change(input, { target: { value: 'Task to complete' } });
        fireEvent.click(addButton);

        const checkbox = screen.getByTestId('task-checkbox');
        fireEvent.click(checkbox);

        expect(checkbox).toBeChecked();
    });
});