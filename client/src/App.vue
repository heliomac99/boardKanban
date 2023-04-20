<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="!eLogin">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <router-link to="/Home" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/ListaParticipante" class="nav-link">Participantes</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/ListaBoard" class="nav-link">Boards</router-link>
                </li>
            </ul>
        </div>
        <a style="color:gray;">Bem vindo</a>
        <a style="color:gray; font-weight: 600;">{{getNomeUsuarioLogado}}</a>
        <a style="color:#628E90; margin-right: 30px; cursor: pointer;" @click="logout()">(Sair)</a>
    </nav>
    <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  computed: {
    eLogin() {
      return this.$route.path ==  '/' ||  this.$route.path ==  '/cadastrousuario' ? true : false 
    },
    getNomeUsuarioLogado () {
      return this.$store.state.usuario.nome
    }
  },
  methods: {
    logout(){
      this.$store.commit('logout')
      this.$router.push({ name: 'Login' })
    }
  }


}
</script>

<style>
.spanErro{
  color: red !important;
}
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
