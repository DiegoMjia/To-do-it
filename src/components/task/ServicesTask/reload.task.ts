import axios from "axios";
import { AppCreateTask } from "../Types/Create.task";

export const getAllTasks = async () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  try {
    const response = await axios.get(`${apiUrl}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const reloadTasks = async (): Promise<AppCreateTask[]> => {
  const tasks = await getAllTasks();
  return tasks;
};
