export interface Todo {
    id?: number;
    title?: string;
    description?: string;
    status?: string;
    created_at?: string;
}
export interface TodoContextType {
    todos: Todo[];
    currentTodo: Todo | null;
    setCurrentTodo: (todo: Todo | null) => void;
    addTodo: (todo: Todo) => void;
    updateTodo: (todo: Todo) => void;
    deleteTodo: (id: number | undefined) => void;
}

export interface TodoItemProps {
    todo: Todo;
}
export interface TodoProviderProps {
    children: React.ReactNode;
}