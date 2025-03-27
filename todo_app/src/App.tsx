import React, { useEffect, useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoBody from "./components/TodoBody";
import AddTodoFormModal from "./components/AddTodoFormModal";
import GetAllTodos from "./hooks/hook";

const App: React.FC = () => {
  // const [t, setOpenForm] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  useEffect(() => {
    if (!openForm) {
      // Get all todos
      GetAllTodos();
    }
  }, [openForm]);
  return (
    <main className="flex justify-center min-h-screen">
      <div className="lg:w-[70%]">
        <TodoHeader />
        <TodoBody show={setOpenForm} />
        {openForm ? <AddTodoFormModal show={setOpenForm} /> : null}
      </div>
    </main>
  );
};

export default App;
