import { Check, Trash } from "lucide-react";
import React from "react";
import { TodoType } from "../types/type";
import { API_REMOVE_TODO, API_UPDATE_TODO } from "../api/api";
import axios from "axios";
import toast from "react-hot-toast";

interface Todo {
  todo: TodoType;
  getAllTodos: () => Promise<void>; // la prop qui contient les données d'une tâche
}

const TasksItem: React.FC<Todo> = ({ todo, getAllTodos }) => {
  const removeTodoById = async (idTodo: string) => {
    try {
      const response = await axios.delete(API_REMOVE_TODO(idTodo));
      if (response?.data?.success) {
        // console.log(response.data.data);
        getAllTodos();
        toast.success(response.data.message);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };
  const updateTodoById = async (idTodo: string) => {
    try {
      const response = await axios.put(API_UPDATE_TODO(idTodo));
      if (response?.data?.success) {
        // console.log(response.data.data);
        getAllTodos();
        toast.success(response.data.message);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div
      className={`p-3 rounded-md relative ${
        todo?.completed
          ? "bg-teal-600 text-white"
          : "bg-indigo-600/40 text-white"
      } shadow group space-y-2`}
    >
      <div>
        <h3 className="font-bold">{todo?.titre}</h3>
        <p>{todo?.description}</p>
      </div>
      <div>
        <p className="text-xs italic">
          <span>Ajouté le </span>
          <span>{new Date(todo.createdAt).toLocaleDateString()}</span>
        </p>
      </div>
      {/* les boutons */}
      <div className="opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-700">
        {/* bouton de suppression */}
        <button
          className="bg-red-600 shadow border-2 border-white lg:absolute bottom-2 right-2 w-8 h-8 flex items-center justify-center rounded-full border-r-white p-2 text-white font-semibold hover:bg-red-700 transition-colors duration-500 cursor-pointer"
          onClick={() => removeTodoById(todo._id as string)}
        >
          <Trash />
        </button>

        {/* bouton de pour completer */}
        {!todo?.completed && (
          <button
            className="bg-teal-600 shadow border-2 border-white lg:absolute bottom-11 right-2 w-8 h-8 flex items-center justify-center rounded-full border-r-white p-2 text-white font-semibold hover:bg-teal-700 transition-colors duration-500 cursor-pointer"
            onClick={() => updateTodoById(todo._id as string)}
          >
            <Check />
          </button>
        )}
      </div>
    </div>
  );
};

export default TasksItem;
