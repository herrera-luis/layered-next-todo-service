import { NextApiRequest, NextApiResponse } from "next";
import { getAllTodos, createTodo } from "../../../services/TodoService";
import { Todo } from "../../../models/Todo";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "GET":
            const todos = await getAllTodos();
            res.status(200).json(todos);
            break;
        case "POST":
            const todo: Omit<Todo, "id"> = req.body;
            const newTodo = await createTodo(todo);
            res.status(201).json(newTodo);
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}