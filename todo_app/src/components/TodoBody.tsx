import React, { useState } from "react";
import TasksList from "./TasksList";

interface PropType {
  show: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoBody: React.FC<PropType> = ({ show }) => {
  const [state, setState] = useState("all");
  return (
    <div className="relative bg-white  py-5 rounded-md">
      {/* les boutons */}
      <div className="flex items-center justify-center">
        {/* bouton pour voir toutes les tâches */}
        <button
          className={`${
            state === "all" ? "bg-indigo-600/40" : "bg-indigo-600/20"
          } md:text-[14px] text-[10px] lg:text-base border border-r-white p-2 text-white font-semibold hover:bg-indigo-600/70 transition-colors duration-500 cursor-pointer`}
          onClick={() => setState("all")}
        >
          Tous les tâches
        </button>

        {/* boutons pour voir les tâches conmpleteés */}
        <button
          className={`${
            state === "completed" ? "bg-indigo-600/40" : "bg-indigo-600/20"
          } md:text-[14px] text-[10px] lg:text-base border border-r-white p-2 text-white font-semibold hover:bg-indigo-600/70 transition-colors duration-500 cursor-pointer`}
          onClick={() => setState("completed")}
        >
          Tâches complètes
        </button>

        {/* boutons pour voir les tâches conmpleteés */}
        <button
          className={`${
            state === "cours" ? "bg-indigo-600/40" : "bg-indigo-600/20"
          } md:text-[14px] text-[10px] lg:text-base border border-r-white p-2 text-white font-semibold hover:bg-indigo-600/70 transition-colors duration-500 cursor-pointer`}
          onClick={() => setState("cours")}
        >
          Tâches en cours
        </button>
      </div>

      {/* l'entête */}
      <div className="flex items-center justify-between mt-5 px-5 border-b py-4">
        <h2 className="md:text-[20px] lg:text-4xl font-bold">Les Tâches</h2>
        <button
          className="bg-teal-600 text-[10px] md:text-[16px] lg:text-base border border-r-white p-2 rounded-md text-white font-semibold hover:bg-teal-700 transition-colors duration-500 cursor-pointer space-x-1"
          onClick={() => show(true)}
        >
          <span className="border border-white h-5 w-5 inline-flex p-1 rounded-full justify-center items-center">
            +
          </span>
          <span>Ajouter une tâche</span>
        </button>
      </div>

      <TasksList state={state} />
    </div>
  );
};

export default TodoBody;
