const BASE_URL = "http://localhost:4000";

export const API_ADD_TODO = `${BASE_URL}/api/todo/add-todo`;
export const API_GETALL_TODO = `${BASE_URL}/api/todo/get-todo`;
export const API_UPDATE_TODO = (idTodo: string) =>
  `${BASE_URL}/api/todo/update-todo/${idTodo}`;
export const API_REMOVE_TODO = (idTodo: string) =>
  `${BASE_URL}/api/todo/delete-todo/${idTodo}`;
