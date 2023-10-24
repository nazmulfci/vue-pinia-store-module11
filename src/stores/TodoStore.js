// stores/TodoStore.js
import { defineStore } from 'pinia';

export const useTodoStore = defineStore({
  id: 'todoStore',
  state: () => ({
    tasks: [],
  }),
  actions: {
    addTask(taskName) {
      const newTask = {
        id: Date.now(),
        name: taskName,
        done: false,
      };
      this.tasks.push(newTask);
    },
    removeTask(taskId) {
      const index = this.tasks.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    },
    toggleTaskStatus(taskId) {
      const task = this.tasks.find((task) => task.id === taskId);
      if (task) {
        task.done = !task.done;
      }
    },
  },
});
