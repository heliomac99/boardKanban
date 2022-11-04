<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <router-link to="/Board" class="nav-link">Board</router-link>
      <router-link to="/ListaAutor" class="nav-link">Autores</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
.navbar{
  display:flex !important;
  justify-content: flex-start !important;
  height: 60px !important;
  margin-bottom: 20px;
}

a{
  margin-left: 20px !important;
}
</style>
