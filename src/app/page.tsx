'use client'
import { useEffect, useState } from "react";
import { TodoList } from "../components/TodoList";
import { CreateTodo } from "../components/CreateTodo";
import { getAllTodos, createTodo } from "../services/TodoService";
import { Todo } from "../models/Todo";

const HomePage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
    async function fetchTodos() {
      const todos = await getAllTodos();
      setTodos(todos);
    }

    fetchTodos();
  }, []);

  const handleCreateTodo = async (todo: Omit<Todo, "id">) => {
    const newTodo = await createTodo(todo);
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="display-6">TODO App</h1>
        <CreateTodo onCreate={handleCreateTodo} />
      </div >
      <div className="container-fluid">
        <div className="row">
          <div className="col">
          </div>
          <div className="col-lg">
            <TodoList todos={todos} />
          </div>
          <div className="col">
          </div>
        </div>
      </div >
    </div >
  );
};

export default HomePage;