<template>
    <div>
      <h1>Todo App</h1>
      <input v-model="newTask" @keyup.enter="addNewTask" placeholder="Add a new task" />
      <button @click="addNewTask">Add Task</button>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <input type="checkbox" v-model="task.done" @change="toggleTaskStatus(task.id)" />
          {{ task.name }}
          <button @click="removeTask(task.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref,defineComponent } from 'vue';
  import { useTodoStore } from '../stores/TodoStore';
  
  export default defineComponent({
    setup() {
      const todoStore = useTodoStore();
      const newTask = ref('');
  
      const addNewTask = () => {
        if (newTask.value.trim() !== '') {
          todoStore.addTask(newTask.value);
          newTask.value = '';
        }
      };
  
      return {
        newTask,
        tasks: todoStore.tasks,
        addNewTask,
        toggleTaskStatus: todoStore.toggleTaskStatus,
        removeTask: todoStore.removeTask,
      };
    },
  });
  </script>
  