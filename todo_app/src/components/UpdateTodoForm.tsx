import React, { useActionState } from "react";
import { updateTodo } from "../action/action";
import { X } from "lucide-react";

interface PropType {
  show: React.Dispatch<React.SetStateAction<boolean>>;
}
const UpdateTodoFormModal: React.FC<PropType> = ({ show }) => {
  const [actionState, formAction, isPending] = useActionState(updateTodo, null);

  //   useEffect(() => {
  //     window.location.reload();
  //   }, [open]);

  return (
    <div className="flex items-center justify-center bg-black/40 absolute inset-0 z-50">
      <form
        action={formAction}
        className="bg-white p-5 rounded-md flex flex-col gap-5"
      >
        <input
          type="text"
          name="id"
          id="id"
          placeholder="Mettre un titre..."
          className="border border-indigo-600/40 rounded-md p-2"
        />
        <input
          type="text"
          name="titre"
          id="titre"
          placeholder="Mettre un titre..."
          className="border border-indigo-600/40 rounded-md p-2"
        />
        <textarea
          name="description"
          id="description"
          placeholder="mettre description..."
          className="border border-indigo-600/40 rounded-md p-2"
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-indigo-600/40 py-2 rounded-md text-white hover:bg-indigo-600/70 transition-all duration-500 cursor-pointer"
        >
          {isPending ? "En cours..." : "Ajouter"}
        </button>
        {actionState && <p>{actionState?.message}</p>}
      </form>
      <button
        className="bg-red-600 shadow border-2 border-white absolute top-10 right-10 w-8 h-8 flex items-center justify-center rounded-full border-r-white p-2 text-white font-semibold hover:bg-red-700 transition-colors duration-500 cursor-pointer"
        onClick={() => show(false)}
      >
        <X />
      </button>
    </div>
  );
};

export default UpdateTodoFormModal;
