import axios from "axios";
import { Todo } from "../models/Todo";

const API_BASE_URL = "http://localhost:8000";

export const getAllTodos = async (): Promise<Todo[]> => {
    const response = await axios.get(`${API_BASE_URL}/todos`);
    return response.data;
};

export const createTodo = async (todo: Omit<Todo, "id">): Promise<Todo> => {
    const response = await axios.post(`${API_BASE_URL}/todos`, todo);
    return response.data;
};

// Add other methods for update, delete, etc.