import express from 'express';
import { addTodo, deleteTodo, getAllTodos, updateTodo } from '../controllers/todo.controller.js';

const todoRouter = express.Router();

// POST /api/todo
todoRouter.post('/add-todo', addTodo)

// GET /api/todo
todoRouter.get('/get-todo', getAllTodos)

// PUT /api/todo/:idTodo
todoRouter.put('/update-todo/:idTodo', updateTodo)

todoRouter.delete('/delete-todo/:idTodo', deleteTodo);


export default todoRouter