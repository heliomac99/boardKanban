<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <router-link to="/Board" class="nav-link">Board</router-link>
      <router-link to="/ListaParticipante" class="nav-link">Participantes</router-link>
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

.primaryColorBtn{
  background-color:#53a548 !important;
  border-color: #53a548 !important
}

.secondaryColor{
  color: #19381f !important;
}

.spanErro{
  float: left;
}

body{
  font-family: 'Roboto Mono', monospace !important;
}
</style>
