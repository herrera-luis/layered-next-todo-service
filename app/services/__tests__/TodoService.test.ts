import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from '../TodoService';
import { Todo } from '../../models/Todo';

const API_BASE_URL = 'http://localhost:8000';

const server = setupServer(
    rest.get(`${API_BASE_URL}/api/v1/todo`, (req, res, ctx) => {
        return res(ctx.json([{ id: 1, title: 'Test Todo', description: 'This is a test', status: 'todo' }]));
    }),
    rest.post(`${API_BASE_URL}/api/v1/todo`, (req, res, ctx) => {
        return res(ctx.json({ id: 2, title: 'New Todo', description: 'Another test', status: 'todo' }));
    }),
    rest.put(`${API_BASE_URL}/api/v1/todo/:id`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
    rest.delete(`${API_BASE_URL}/api/v1/todo/:id`, (req, res, ctx) => {
        return res(ctx.status(200));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('TodoService', () => {
    it('fetches todos from the API', async () => {
        const todos = await fetchTodos();
        expect(todos.length).toBe(1);
        expect(todos[0].title).toBe('Test Todo');
    });

    it('adds a todo using the API', async () => {
        const newTodo: Todo = { id: 2, title: 'New Todo', description: 'Another test', status: 'todo' };
        const addedTodo = await addTodo(newTodo);
        expect(addedTodo.id).toBe(2);
        expect(addedTodo.title).toBe('New Todo');
    });

    it('updates a todo using the API', async () => {
        const updatedTodo: Todo = { id: 1, title: 'Updated Todo', description: 'Updated test', status: 'todo' };
        await expect(updateTodo(updatedTodo)).resolves.not.toThrow();
    });

    it('deletes a todo using the API', async () => {
        await expect(deleteTodo(1)).resolves.not.toThrow();
    });
});