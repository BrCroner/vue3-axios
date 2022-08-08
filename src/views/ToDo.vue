<template>
  <div class="todo-page">
    <h1>Lista de Tarefas</h1>
    <form @submit.prevent>
      <div class="mb1">
        <label for="task-label">Tarefas: </label>
        <input type="text" id="task-label" v-model="newTask.label" />
      </div>
      <div class="mb1">
        <label for="task-type">Escolha um tipo: </label>
        <select name="task-type" id="task-type" v-model="newTask.type">
          <option value="personal">Pessoal</option>
          <option value="work">Trabalho</option>
          <option value="miscellaneous">Diversos</option>
        </select>
      </div>
      <button @click="addTask">Adicionar</button>
    </form>
    <h2>Task List</h2>
    <div>
      <button @click="listFilter = 'all'">Todas</button> |
      <button @click="listFilter = 'incomplete'">Incompletas</button> |
      <button @click="listFilter = 'complete'">Completas</button>
    </div>
    <ul>
      <li v-for="(task, index) in filteredTasks" :key="`task-${index}`">
        <input type="checkbox" v-model="task.isComplete" /> {{ task.label }} ({{
          task.type
        }})
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { ToDoItem } from '../types'

// Composition API
export default defineComponent({
  setup() {
    const state = reactive({
      newTask: {
        label: '',
        type: 'personal',
      } as ToDoItem,
      taskItems: [] as ToDoItem[],
      listFilter: 'all',
    })

    const filteredTasks = computed(() => {
      if (state.listFilter === 'complete') {
        return state.taskItems.filter(
          (item: ToDoItem) => item.isComplete === true
        )
      } else if (state.listFilter === 'incomplete') {
        return state.taskItems.filter(
          (item: ToDoItem) => item.isComplete === false
        )
      } else {
        return state.taskItems
      }
    })

    const addTask = () => {
      state.taskItems.push({
        ...state.newTask,
        isComplete: false,
      })
    }

    return {
      ...toRefs(state),
      addTask,
      filteredTasks,
    }
  },
})
</script>

<style scoped>
.todo-page {
  max-width: 800px;
  margin: 0 auto;
}
ul {
  list-style: none;
}
.mb1 {
  margin-bottom: 1rem;
}
</style>
