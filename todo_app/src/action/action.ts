import axios from "axios";
import { API_ADD_TODO, API_UPDATE_TODO } from "../api/api";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addTodo = async (_: any, formData: FormData) => {
  const titre = formData.get("titre");
  const description = formData.get("description");
  const data = {
    titre,
    description,
  };
  // console.log(data);
  try {
    const response = await axios.post(API_ADD_TODO, data);
    if (response.data.success) {
      return {
        message: response.data.message,
        payload: response.data.data,
      };
    }
    return {
      message: response.data.message,
      payload: null,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error.response.data.message);
    return {
      message: error.response.data.message,
      payload: null,
    };
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateTodo = async (_: any, formData: FormData) => {
  const titre = formData.get("titre");
  const description = formData.get("description");
  const idTodo = formData.get("id");
  const data = {
    titre,
    description,
  };
  console.log(data);
  try {
    const response = await axios.post(API_UPDATE_TODO(idTodo as string), data);
    if (response.data.success) {
      return {
        message: response.data.message,
        payload: response.data.data,
      };
    }
    return {
      message: response.data.message,
      payload: null,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error.response.data.message);
    return {
      message: error.response.data.message,
      payload: null,
    };
  }
};
