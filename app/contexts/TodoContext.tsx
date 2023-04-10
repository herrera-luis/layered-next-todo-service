'use client'
import React, { createContext, useState, useEffect } from 'react';
import { Todo, TodoContextType, TodoProviderProps } from '../models/Todo';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from '../services/TodoService';


const TodoContextDefaultValues: TodoContextType = {
    todos: [],
    currentTodo: null,
    setCurrentTodo: () => { },
    addTodo: () => { },
    updateTodo: () => { },
    deleteTodo: () => { }
};


export const TodoContext = createContext<TodoContextType>(TodoContextDefaultValues);



export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);

    useEffect(() => {
        const fetchTodosFromAPI = async () => {
            const data = await fetchTodos();
            setTodos(data);
        };
        fetchTodosFromAPI();
    }, []);

    const addTodoHandler = async (todo: Todo) => {
        const newTodo = await addTodo(todo);
        setTodos([...todos, newTodo]);
    };

    const updateTodoHandler = async (todo: Todo) => {
        await updateTodo(todo);
        setTodos(todos.map(t => (t.id === todo.id ? todo : t)));
        setCurrentTodo(null);
    };

    const deleteTodoHandler = async (id: number | undefined) => {
        await deleteTodo(id!);
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <TodoContext.Provider
            value={{
                todos,
                currentTodo,
                setCurrentTodo,
                addTodo: addTodoHandler,
                updateTodo: updateTodoHandler,
                deleteTodo: deleteTodoHandler,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};