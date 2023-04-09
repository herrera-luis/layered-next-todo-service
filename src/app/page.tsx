import React from "react";
import TodoList from "../components/TodoList";
import TodoForm from '../components/TodoForm';
import { TodoProvider } from '../contexts/TodoContext';

const HomePage: React.FC = () => {

  return (
    <div className="App">
      <TodoProvider>
        <div className="container">
          <h1 className="display-6">TODO App</h1>
          <TodoForm />
        </div >
        <div className="container-fluid">
          <div className="row">
            <div className="col">
            </div>
            <div className="col-lg">
              <TodoList />
            </div>
            <div className="col">
            </div>
          </div>
        </div >
      </TodoProvider>
    </div >
  );
};

export default HomePage;