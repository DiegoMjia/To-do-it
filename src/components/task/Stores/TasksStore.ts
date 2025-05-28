import { defineStore } from "pinia";
import type { AppCreateTask, ITask } from "../Types/Create.task";

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [] as AppCreateTask[],
  }),

  actions: {
    addTask(task: ITask) {
      this.tasks.push({ ...task });
    },
    removeTaskById(TaskId: string, deleteStatus: string) {
      const index = this.tasks.findIndex((t) => t.id === TaskId);
      if (index !== -1) {
        this.tasks[index].status = deleteStatus;
      }
    },
    updateTask(task: AppCreateTask) {
      const index = this.tasks.findIndex((t) => t === task);
      if (index !== -1) {
        this.tasks[index] = task;
      }
    },
    updateTaskByid(updatedTask: AppCreateTask) {
      const index = this.tasks.findIndex((t) => t.id === updatedTask.id);
      if (index !== -1) {
        this.tasks[index] = updatedTask;
      }
    },
    updateStatus(TaskId: string, status: string) {
      const index = this.tasks.findIndex((t) => t.id === TaskId);
      if (index !== -1) {
        this.tasks[index].status = status;
      }
    },
    reverseStatus(TaskId: string) {
      const index = this.tasks.findIndex((t) => t.id === TaskId);
      if (index !== -1) {
        this.tasks[index].status = "pendiente";
      }
    },
    getTasksInfo() {
      return this.tasks;
    },
  },
});
