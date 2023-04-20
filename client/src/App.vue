<template>
  <div>
    <nav v-if="!eLogin" class="navbar navbar-light bg-light">
      <router-link to="/Board" class="nav-link">Home</router-link>
      <router-link to="/ListaParticipante" class="nav-link">Participantes</router-link>
      <router-link to="/ListaBoard" class="nav-link">Boards</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    eLogin() {
      return this.$route.path ==  '/' ? true : false 
    }
  }


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
  background-color:#bc6c25 !important;
  border-color: #bc6c25 !important
}

.secondaryColorBtn{
  background-color:#19381f !important;
  border-color: #19381f !important
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

.nav-link:hover{
  color:#bc6c25 !important;
}
</style>
