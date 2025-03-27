import axios from "axios";
import { API_GETALL_TODO } from "../api/api";

const GetAllTodos = async () => {
  try {
    const response = await axios.get(API_GETALL_TODO);
    if (response?.data?.data) {
      // console.log(response.data.data);
      return response.data.data;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};

export default GetAllTodos;
