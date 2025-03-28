const URL_BACKEND_PROD = import.meta.env.VITE_BACKEND_PROD_URL;
const URL_BACKEND_DEV = import.meta.env.VITE_BACKEND_DEV_URL;
const ENV = import.meta.env.VITE_NODE_ENV;

const BASE_URL = ENV === "production" ? URL_BACKEND_PROD : URL_BACKEND_DEV;

export const API_ADD_TODO = `${BASE_URL}/api/todo/add-todo`;
export const API_GETALL_TODO = `${BASE_URL}/api/todo/get-todo`;
export const API_UPDATE_TODO = (idTodo: string) =>
  `${BASE_URL}/api/todo/update-todo/${idTodo}`;
export const API_REMOVE_TODO = (idTodo: string) =>
  `${BASE_URL}/api/todo/delete-todo/${idTodo}`;
