'use client'
import React, { useContext } from 'react';
import { TodoItem } from './TodoItem';
import { TodoContext } from '../contexts/TodoContext';

const TodoList: React.FC = () => {
    const context = useContext(TodoContext);
    if (!context) {
        return <div>Error: TodoContext is not defined</div>;
    }
    const { todos } = context;

    return (
        <div >
            <hr className="p-2" />
            {
                todos.length === 0 ? (
                    <p>No TODOs found.</p>
                ) : (
                    <div className=" row list-item-group">
                        <div className="col-lg-1" />
                        <div className="col-lg-10">
                            <div className="container">
                                <div className='row'>
                                    {todos.map((todo) => (
                                        <>
                                            <div className="col-lg-6 p-2">
                                                <TodoItem key={todo.id} todo={todo} />
                                            </div>
                                            <br />
                                        </>
                                    ))}
                                </div >
                            </div >
                        </div>
                        <div className="col-lg-1" />
                    </div>)
            }
            <br />
        </div >


    );
};

export default TodoList;