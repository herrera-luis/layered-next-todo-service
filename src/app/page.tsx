import React from "react";
import TodoList from "../components/TodoList";
import TodoForm from '../components/TodoForm';
import { TodoProvider } from '../contexts/TodoContext';

const HomePage: React.FC = () => {

  return (
    <div className="App">
      <TodoProvider>
        <div className="container">
          <h1 className="text-center">TODO</h1>
          <div className="row">
            <div className="col-lg-3" />
            <div className="col-lg">
              <TodoForm />
            </div>
            <div className="col-lg-3" />

          </div>

        </div >
        <div className="container">
          <TodoList />
        </div >
      </TodoProvider>
    </div >
  );
};

export default HomePage;