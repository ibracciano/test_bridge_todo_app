// import React from "react";

import TasksItem from "./TasksItem";
import { useEffect, useState } from "react";
import { TodoType } from "../types/type";
import GetAllTodos from "../hooks/hook";
interface TypeBtn {
  state: string;
}

const TasksList: React.FC<TypeBtn> = ({ state }) => {
  const [todos, setTodos] = useState<TodoType[] | []>([]);

  const getAllTodos = async () => {
    try {
      const response: TodoType[] | string = await GetAllTodos();
      setTodos(response as TodoType[]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  const todoCompleted = todos?.filter((todo) => todo.completed);
  const todoEnCours = todos?.filter((todo) => !todo.completed);

  return (
    <>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5 px-5">
        {state === "all" && todos?.length > 0 ? (
          todos.map((todo) => {
            return (
              <TasksItem key={todo._id} todo={todo} getAllTodos={getAllTodos} />
            );
          })
        ) : (
          <div className="flex items-center justify-center">
            <p>Aucune tâche à afficher.</p>
          </div>
        )}

        {state === "completed" && todoCompleted?.length > 0 ? (
          todoCompleted.map((todo) => {
            return (
              <TasksItem key={todo._id} todo={todo} getAllTodos={getAllTodos} />
            );
          })
        ) : (
          <div className="flex items-center justify-center">
            <p>Aucune tâche à afficher.</p>
          </div>
        )}

        {state === "cours" && todoCompleted?.length > 0 ? (
          todoEnCours.map((todo) => {
            return (
              <TasksItem key={todo._id} todo={todo} getAllTodos={getAllTodos} />
            );
          })
        ) : (
          <div className="flex items-center justify-center">
            <p>Aucune tâche à afficher.</p>
          </div>
        )}
      </div>
      <div className="px-5 mt-5 flex justify-between py-2 shadow-black bg-white">
        {/* total todo */}
        <p className="flex gap-1 lg:gap-2">
          <span>Total : </span>
          <span>{todos.length}</span>
        </p>
        {/* completed todo */}
        <p className="flex items-center gap-1 lg:gap-2">
          <span className="inline-flex w-5 h-5 rounded-full bg-teal-600"></span>
          <span>Completés : </span>
          <span>{todoCompleted.length}</span>
        </p>
        {/* todo in progress */}
        <p className="flex items-center gap-1 lg:gap-2">
          <span className="inline-flex w-5 h-5 rounded-full bg-indigo-600/40"></span>
          <span>En cours : </span>
          <span>{todos.length - todoCompleted.length}</span>
        </p>
      </div>
    </>
  );
};

export default TasksList;
