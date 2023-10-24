<template>
  <div id="app">
    <TodoApp />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TodoApp from './components/TodoApp.vue';

export default defineComponent({
  components: {
    TodoApp,
  },
});
</script>
