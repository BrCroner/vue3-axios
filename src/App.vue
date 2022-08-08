<template>
  <nav>
    <RouterLink :to="{ name: 'EventList' }">Eventos</RouterLink> |
    <RouterLink :to="{ name: 'TheAbout' }">Sobre</RouterLink> |
    <RouterLink :to="{ name: 'ToDo' }">Lista de Tarefas</RouterLink>
  </nav>
  <RouterView />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  margin: 0 10px;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
h4 {
  font-size: 20px;
}
</style>
