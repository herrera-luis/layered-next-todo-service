import axios from "axios";
import { Todo } from "../models/Todo";

const API_BASE_URL = "http://localhost:8000";

export const fetchTodos = async (): Promise<Todo[]> => {
    const { data } = await axios.get(`${API_BASE_URL}/api/v1/todos/`);
    return data;
};

export const addTodo = async (todo: Todo): Promise<Todo> => {
    const { data } = await axios.post(`${API_BASE_URL}/api/v1/todos/`, todo);
    return data;
};

export const updateTodo = async (todo: Todo): Promise<void> => {
    await axios.put(`${API_BASE_URL}/api/v1/todos/${todo.id}`, todo);
};

export const deleteTodo = async (id: number): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/api/v1/todos/${id}`);
}